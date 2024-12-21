// import React, { useState } from "react";

// function LocalExpertsHub() {
//   const [category, setCategory] = useState("");
//   const experts = [
//     { name: "John Doe", rating: 4.8, img: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6ccabba-ea38-411f-a673-04f26b5e919c_980x980.jpeg" },
//     { name: "Jane Smith", rating: 4.5, img: "https://via.placeholder.com/150" },
//   ];

//   return (
//     <div style={{ fontFamily: "Arial", padding: "20px" }}>
//       <h1 style={{ color: "green", textAlign: "center" }}>Local Experts Hub</h1>
//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <button style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#56ab2f", color: "white", borderRadius: "5px" }}>
//           Sign Up as Expert
//         </button>
//         <div style={{ display: "inline-block" }}>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             style={{
//               padding: "10px",
//               backgroundColor: "#56ab2f",
//               color: "white",
//               borderRadius: "5px",
//               margin: "10px",
//             }}
//           >
//             <option value="">Select Category</option>
//             <option value="designer">Interior Designer</option>
//             <option value="chef">Chef</option>
//           </select>
//         </div>
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {experts.map((expert, index) => (
//           <div
//             key={index}
//             style={{
//               width: "200px",
//               textAlign: "center",
//               backgroundColor: "white",
//               border: "1px solid #56ab2f",
//               borderRadius: "10px",
//               padding: "15px",
//               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <img
//               src={expert.img}
//               alt={expert.name}
//               style={{ width: "100px", height: "100px", borderRadius: "50%" }}
//             />
//             <h3 style={{ color: "#56ab2f" }}>{expert.name}</h3>
//             <p style={{ color: "gray" }}>Rating: {expert.rating}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LocalExpertsHub;




// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LocalExpertsHub = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate("/signup-expert"); // Navigate to the signup page
//   };

//   return (
//     <div
//       style={{
//         padding: "20px",
//         background: "#fff", // Changed to white background
//         minHeight: "100vh",
//         color: "#333",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h1 style={{ color: "#56ab2f" }}>Local Experts Hub</h1>
//       <p>
//         Connect with skilled local experts for all your homestay needs. Whether
//         you need an interior designer, chef, or more, we’ve got you covered!
//       </p>

//       <div style={{ marginTop: "20px" }}>
//         <button
//           onClick={handleSignUpClick}
//           style={{
//             background: "#56ab2f", // Green button background
//             color: "#fff",
//             border: "none",
//             padding: "10px 20px",
//             margin: "10px",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         >
//           Sign Up as Expert
//         </button>

//         <button
//           style={{
//             background: "#56ab2f", // Green button background
//             color: "#fff",
//             border: "none",
//             padding: "10px 20px",
//             margin: "10px",
//             borderRadius: "5px",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         >
//           Book an Expert
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LocalExpertsHub;






import React from "react";
import { useNavigate } from "react-router-dom";

const LocalExpertsHub = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup-expert");
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory !== "default") {
      // Navigate to the profiles page with the selected category
      navigate(`/profiles/${selectedCategory}`);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        background: "#fff",
        minHeight: "100vh",
        color: "#333",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#56ab2f" }}>Local Experts Hub</h1>
      <p>
        Connect with skilled local experts for all your homestay needs. Whether
        you need an interior designer, chef, or more, we’ve got you covered!
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleSignUpClick}
          style={{
            background: "#56ab2f",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign Up as Expert
        </button>

        <select
          onChange={handleCategoryChange}
          defaultValue="default"
          style={{
            background: "#56ab2f",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            appearance: "none",
          }}
        >
          <option value="default" disabled>
            Select Expertise
          </option>
          <option value="interior-designer">Interior Designer</option>
          <option value="chef">Chef</option>
          <option value="event-planner">Event Planner</option>
          <option value="landscaper">Landscaper</option>
        </select>
      </div>
    </div>
  );
};

export default LocalExpertsHub;
