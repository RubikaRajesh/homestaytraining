import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#56ab2f", // Green gradient
        color: "white",
        padding: "16px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Homestay Training
          </Link>
        </h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline" style={{ color: "white" }}>
            Home
          </Link>
          <Link
            to="/modules"
            className="hover:underline"
            style={{ color: "white" }}
          >
            Modules
          </Link>
          <Link
            to="/local-experts-hub"
            className="hover:underline"
            style={{ color: "white" }}
          >
            Local Experts Hub
          </Link>
          <Link
            to="/feedback"
            className="hover:underline"
            style={{ color: "white" }}
          >
            Feedback
          </Link>
          <Link
            to="/survey"
            className="hover:underline"
            style={{ color: "white" }}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 p-4 flex justify-between items-center">
//       <div className="text-white text-2xl font-bold" href="#home">Homestay Training</div>
//       <div className="space-x-4">
//         <a href="#templates" className="text-white hover:underline">
//           Download Templates
//         </a>
//         <a href="#modules" className="text-white hover:underline">
//           Marketing Support
//         </a>
//         <a href="feedback" className="text-white hover:underline">
//           Guest Feedback
//         </a>
//         <a href="#modules" className="text-white hover:underline">
//           Peer Connection
//         </a>
//       </div>
//       <div>
//         <Link to="/login" className="text-white mr-4 hover:underline">
//           Login
//         </Link>
//         <Link to="/register" className="text-white hover:underline">
//           Register
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav
//   style={{
//     background:"  #56ab2f", // Green gradient
//     color: "white",
//     padding: "16px",
//     textAlign: "center",
//     fontSize: "18px",
//     fontWeight: "bold",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow
//   }}
// >
//       <div className="container mx-auto flex justify-between">
//         <h1 className="text-lg font-bold">Homestay Training</h1>
//         <div className="flex gap-4">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//           <Link to="/templates" className="hover:underline">
//             Templates
//           </Link>
//           <Link to="/modules" className="hover:underline">
//             Modules
//           </Link>
//           <Link to="/feedback" className="hover:underline">
//             Feedback
//           </Link>
//           <Link to="/survey" className="hover:underline">
//             Survey
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



