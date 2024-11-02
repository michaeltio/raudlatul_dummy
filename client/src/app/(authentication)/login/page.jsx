"use client";
import { useState } from "react";
import { loginUser } from "@/api/apiClient";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await loginUser(formData);
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex h-3/5 w-1/2 justify-end rounded-3xl bg-[#092928]">
      <div className="relative flex h-full w-1/2 flex-col justify-center rounded-r-3xl bg-white">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <form
          className="relative mt-8 flex w-full flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          {/* {error && <p className="text-red-500">{error}</p>} 
          {successMessage && <p className="text-green-500">{successMessage}</p>}  */}

          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute aspect-square h-full rounded-l-full bg-[#D9D9D9]"></div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
            />
          </div>
          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute aspect-square h-full rounded-l-full bg-[#D9D9D9]"></div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
            />
          </div>
          <button type="submit" className="rounded-full bg-[#E9B472] px-8 py-2">
            Login
          </button>
          <Link href="/register">Don't Have an Account? Register Here!</Link>
        </form>
      </div>
    </div>
  );
}
