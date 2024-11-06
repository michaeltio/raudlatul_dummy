import axios from "axios";
import { signOutUser } from "./apiClient";

export const isUserSignedIn = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await axios.get("http://localhost:3001/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      localStorage.removeItem("token");
      await signOutUser();
      console.error("Error fetching user:", error);
    }
  }
  return null;
};
