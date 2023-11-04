import { loginPath, registerPath, requestConfig } from "../utils/config";

// Register an user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(registerPath, config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(`Register service error ${error}`);
  }
};

// Logout an user
const logout = () => {
  localStorage.removeItem("user");
};

//Sign in an user
const login = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(loginPath, config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(`Login service error ${error}`);
  }
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
