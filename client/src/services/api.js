import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach Access Token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Auto Refresh Access Token
API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          localStorage.getItem("refreshToken");

        const res = await axios.post(
          "http://localhost:5000/api/auth/refresh-token",
          {
            refreshToken,
          }
        );

        const newAccessToken = res.data.token;

        localStorage.setItem(
          "token",
          newAccessToken
        );

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return API(originalRequest);

      } catch (err) {

        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        window.location.href = "/login";

      }
    }

    return Promise.reject(error);
  }
);

export default API;