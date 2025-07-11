import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Assessment Portal</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}