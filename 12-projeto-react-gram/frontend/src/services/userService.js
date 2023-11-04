import { profilePath, requestConfig } from "../utils/config";

// Get user Details
const profile = async (data, token) => {
  const config = requestConfig("GET", data, token);

  try {
    const res = await fetch(profilePath, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(`Profile service error ${error}`);
  }
};

const userService = {
  profile,
};

export default userService;
