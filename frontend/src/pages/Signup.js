import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "./AuhForm"; 
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try{
    console.log("handleSubmit called",email, password);
    const res = await axios.post("http://localhost:8080/signup",{email, password}, {
      headers: { "Content-Type": "application/json" }
    });
    if (res.status === 200) {
      alert("Registered successfully!");
      navigate("/login");
    } 
  }catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed: " + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
         <AuthForm mode="signup" setEmail={setEmail} setPassword={setPassword} email={email} password={password} handleSubmit={handleSignup}/>
    </div>
  );
}
