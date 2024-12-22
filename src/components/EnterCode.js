import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import

const EnterCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate code validation
    if (code === "yourValidCode") {
      // Navigate to feedback page if code is valid
      navigate("/feedback");
    } else {
      alert("Invalid code! Please try again.");
    }
  };

  return (
    <div>
      <h2>Enter Code</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the unique code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnterCode;
