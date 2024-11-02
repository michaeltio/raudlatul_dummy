import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
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

export const postData = async (collectionName, data) => {
  return apiClient.post(`/create/${collectionName}`, data);
}

export const getAllData = async (collectionName) => {
  return apiClient.get("/read/" + collectionName);
};

export const getData = async (collectionName, id) => {
  return apiClient.get(`/read/${collectionName}/${id}`);
};

export const updateData = async (collectionName, id, data) => {
  return apiClient.post(`/update/${collectionName}/${id}`, data);
};

export const deleteData = async (collectionName, id) => {
  return apiClient.post(`/delete/${collectionName}/${id}`);
};

export default apiClient;
