import React, { useState } from "react";

export default function AuthForm({ mode = "signup", setEmail, setPassword, email, password,handleSubmit }) {
 
  const [error, setError] = useState("");

  const formSubmit = () => {
    if (!email || !password) {
      return setError("Email and password are required.");
    }
    if (!email.includes("@")) {
      return setError("Invalid email format.");
    }

    setError("");
    handleSubmit()
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button className="w-full bg-blue-600 text-white p-2 rounded" onClick={formSubmit}>
        {mode === "login" ? "Login" : "Sign Up"}
      </button>
    </div>
  );
}
