import React from "react";
import { useParams } from "react-router-dom";

const expertData = {
  "interior-designer": [
    { name: "Alice Smith", rating: 4.8, image: "https://picsum.photos/200?random=1" },
    { name: "John Doe", rating: 4.5, image: "https://picsum.photos/200?random=2" },
  ],
  chef: [
    { name: "Chef Gordon", rating: 4.9, image: "https://picsum.photos/200?random=3" },
    { name: "Chef Marie", rating: 4.7, image: "https://picsum.photos/200?random=4" },
  ],
  "event-planner": [
    { name: "Planner Emily", rating: 4.6, image: "https://picsum.photos/200?random=5" },
    { name: "Planner Steve", rating: 4.4, image: "https://picsum.photos/200?random=6" },
  ],
  landscaper: [
    { name: "Landscaper Luke", rating: 4.7, image: "https://picsum.photos/200?random=7" },
    { name: "Landscaper Lily", rating: 4.5, image: "https://picsum.photos/200?random=8" },
  ],
};

const ProfilesPage = () => {
  const { category } = useParams(); // Get the selected category from the URL

  const profiles = expertData[category] || [];

  return (
    <div
      style={{
        padding: "20px",
        background: "#f8f9fa",
        minHeight: "100vh",
        color: "#333",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#56ab2f" }}>Experts: {category.replace("-", " ")}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {profiles.map((expert, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={expert.image}
              alt={expert.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#56ab2f" }}>{expert.name}</h3>
            <p>Rating: {expert.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesPage;
