import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call failed:", error);
    if (error.response.status === 401) {
    } else if (error.response.status === 404) {
    }
    return Promise.reject(error);
  }
);


export default apiClient;
