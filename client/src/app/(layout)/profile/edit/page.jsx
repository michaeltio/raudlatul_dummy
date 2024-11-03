"use client";
import React, { useState, useEffect } from "react";
import { getData, updateData } from "@/api/apiClient";
import { isUserSignedIn } from "@/api/auth";
import axios from "axios";

const ProfileEdit = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [uid, setUid] = useState("");

  useEffect(() => {
    console.log("isUserSignedIn", isUserSignedIn());
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:3001/user", {
            headers: {
              Authorization: `${token}`,
            },
          });
          const userId = response.data.user.uid;
          setUid(userId);
          const userDataResponse = await getData("users", userId);
          
          setUserData({
            ...userDataResponse.data,
            email: response.data.user.email,
          });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated data:", userData);
    
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3001/user", {
        headers: {
          Authorization: `${token}`,
        },
      });
      const userId = response.data.user.uid;

      const { email, ...dataToUpdate } = userData; 
      await updateData("users", userId, dataToUpdate);
      alert("Data has been updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("There was an error updating the data.");
    }
  };

  return (
    <div className="mx-6 flex flex-col py-12 font-ptserif lg:mx-28 lg:gap-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-32"
      >
        <div className="flex justify-center">
          <div className="flex h-48 w-48 items-end justify-end rounded-[3rem] bg-[#014E3E] lg:h-80 lg:w-80">
            <div className="absolute h-16 w-16 translate-x-5 translate-y-5 rounded-full bg-[#E9B472] lg:h-24 lg:w-24"></div>
          </div>
        </div>
        <div className="justify-center">
          <div className="flex justify-center gap-10 text-lg lg:gap-20 lg:text-2xl">
            <div className="flex flex-col gap-8">
              <div className="font-semibold">Username</div>
              <div className="font-semibold">Email</div>
              <div className="font-semibold">No Phone</div>
              <div className="font-semibold">Address</div>
            </div>
            <div className="flex flex-col gap-8 pr-6">
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
            </div>
          </div>
          <div className="mt-16 flex justify-center lg:absolute lg:my-20 lg:justify-center lg:text-2xl">
            <button
              type="submit"
              className="rounded-full border-[0.1rem] border-black px-8 lg:h-12"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
