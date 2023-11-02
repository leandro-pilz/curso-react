const mongosse = require("mongoose");
const { Schema } = mongosse;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    profileImage: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongosse.model("User", userSchema);

module.exports = User;
