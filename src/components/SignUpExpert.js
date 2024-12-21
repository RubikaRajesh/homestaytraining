import React, { useState } from "react";

const SignUpExpert = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expert Sign-Up Data:", formData);
    alert("Sign-up Successful! Welcome to Local Experts Hub.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      expertise: "",
      bio: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        background: "linear-gradient(135deg, #56ab2f, #a8e063)", // Green gradient
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>Sign Up as an Expert</h2>
      <form onSubmit={handleSubmit} style={{ color: "white" }}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="expertise">Expertise:</label>
          <select
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            <option value="" disabled>
              Select your expertise
            </option>
            <option value="Interior Designer">Interior Designer</option>
            <option value="Chef">Chef</option>
            <option value="Event Planner">Event Planner</option>
            <option value="Gardener">Gardener</option>
            <option value="Housekeeping Expert">Housekeeping Expert</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="bio">Short Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpExpert;
