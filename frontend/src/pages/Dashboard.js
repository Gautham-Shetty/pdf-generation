import axios from "axios";
import React, { useState } from "react";

export default function Dashboard() {
  const [sessionId, setSessionId] = useState("");
  const [message, setMessage] = useState("");

  const generateReport = async () => {
    const token = localStorage.getItem("token");

    if (!sessionId || !token) {
      setMessage("Missing session ID or token");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/generate-report", 
         { session_id: sessionId },{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      
      });

      if (res.status === 200) {
        const data = await res.data;
        setMessage("PDF generated successfully.");
      } 
    } catch (err) {
      setMessage("Network error: " + err.message);
     
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Generate Assessment Report</h2>
      <input
        type="text"
        value={sessionId}
        onChange={e => setSessionId(e.target.value)}
        placeholder="Enter Session ID (e.g., session_001)"
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={generateReport}
        className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
      >
        Generate PDF
      </button>
      {message && (
        <p className="mt-4 text-sm text-gray-700">
          {message}
       
        </p>
      )}
    </div>
  );
}