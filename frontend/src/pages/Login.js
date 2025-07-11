import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "./AuhForm"; // Assuming AuthForm is a reusable component for login/signup forms

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
    const res = await axios.post("http://localhost:8080/login",{email, password}, {
      headers: { "Content-Type": "application/json" }
    });
    if (res.status === 200) {
      const { token } = await res.data;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  }catch (error) {
    console.error("Login failed:", error);
    alert("Login failed: " + (error.response ? error.response.data : error.message));
  }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
         <AuthForm mode="signup" setEmail={setEmail} setPassword={setPassword} email={email} password={password}
         handleSubmit={handleLogin}
         />
        
    </div>
  );
}
