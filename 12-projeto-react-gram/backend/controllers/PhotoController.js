const Photo = require("../models/Photo");
const User = require("../models/User");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

//Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body;
  const image = req.file.filename;

  const user = await User.findById(new ObjectId(req.user._id)).select(
    "-password"
  );

  //Create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
  });

  // If photo was created successfully, return data
  if (!newPhoto) {
    res.status(422).json({
      errors: [
        "Houve um problema ao criar a imagem, tente novamente mais tarde.",
      ],
    });

    return;
  }

  res.status(201).json(newPhoto);
};

//Remove a photo from DB
const deletePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  try {
    const photo = await Photo.findById(new ObjectId(id));

    // Check if photo exists
    if (!photo) {
      res.status(404).json({ errors: ["Foto não encontrada."] });
      return;
    }

    //Check if photo belongs to user
    if (!photo.userId.equals(reqUser._id)) {
      res.status(422).json({
        errors: ["Ocorreu um erro, por favor tente novamente mais tarde."],
      });
      return;
    }

    await Photo.findByIdAndDelete(photo._id);

    res
      .status(200)
      .json({ id: photo._id, message: "Foto excluída com sucesso." });

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ errors: ["Foto não cadastrada."] });
  }
};

// Get all photos
const getAllPhotos = async (req, res) => {
  const photos = await Photo.find({})
    .sort([["createdAt", -1]])
    .exec();

  res.status(200).json(photos);
};

// Get user photos
const getUserPhotos = async (req, res) => {
  const { id } = req.params;

  const photos = await Photo.find({ userId: id })
    .sort([["createdAt", -1]])
    .exec();

  res.status(200).json(photos);
};

// Get photo by id
const getPhotoById = async (req, res) => {
  const { id } = req.params;

  const photo = await Photo.findById(new ObjectId(id));

  // Check if photo exists
  if (!photo) {
    res.status(404).json({
      errors: ["Foto não encontrada."],
    });

    return;
  }

  res.status(200).json(photo);
};

// Update a photo
const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const reqUser = req.user;

  const photo = await Photo.findById(id);

  // Check if photo exists
  if (!photo) {
    res.status(404).json({
      errors: ["Foto não encontrada."],
    });

    return;
  }

  //Check if photo belongs to user
  if (photo.userId.equals(reqUser._id)) {
    res.status(422).json({
      errors: ["Ocorreu um erro, tente novamente mais tarde."],
    });

    return;
  }

  if (title) {
    photo.title = title;
  }

  await photo.save();

  res.status(200).json({ photo, message: "Foto tualizada com sucesso." });
};

// Like funcionality
const likePhoto = async (req, res) => {
  const { id } = req.params;
  const reqUser = req.user;

  const photo = await Photo.findById(id);

  // Check if photo exists
  if (!photo) {
    res.status(404).json({
      errors: ["Foto não encontrada."],
    });

    return;
  }

  // Check if user already liked the photo
  if (photo.likes.includes(reqUser._id)) {
    res.status(422).json({
      errors: ["Você já curtiu a foto."],
    });

    return;
  }

  // Put user id in like array
  photo.likes.push(reqUser._id);
  await photo.save();
  res
    .status(201)
    .json({ photoId: id, userId: reqUser._id, message: "A foto foi curtida." });
};

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
};
