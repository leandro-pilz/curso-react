const api = "http://localhost:5000/api";
export const usersPath = `${api}/users`;
export const registerPath = `${usersPath}/register`;
export const loginPath = `${usersPath}/login`;
export const profilePath = `${usersPath}/profile`;
export const uploads = `${api}/uploads`;

export const requestConfig = (method, data, token = null, image = null) => {
  let config;

  if (image) {
    config = {
      method,
      body: data,
      headers: {},
    };
  } else if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {},
    };
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
