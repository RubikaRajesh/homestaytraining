// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/survey");
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 shadow-md rounded w-1/3"
//       >
//         <h2 className="text-2xl font-bold mb-6">Register</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           className="w-full mb-4 p-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-2 border rounded"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 p-2 border rounded"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;



// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase Auth
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate("/survey");
    } catch (err) {
      setError(err.message); // Display Firebase error
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded w-1/3"
      >
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
