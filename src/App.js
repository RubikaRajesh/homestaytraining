import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Modules from "./components/Modules";
import Feedback from "./components/Feedback";
import Survey from "./components/Survey";
import Login from "./components/Login";
import Register from "./components/Register";
import LocalExpertsHub from "./components/LocalExpertsHub";
import SignUpExpert from "./components/SignUpExpert";
import ProfilesPage from "./components/ProfilesPage"; // Profiles Page for experts
import EnterCode from "./components/EnterCode"; // Code validation component

const App = () => {
  return (
    <Router>
      {/* Navbar is persistent across all routes */}
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Other Pages */}
        <Route path="/modules" element={<Modules />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Local Experts Hub */}
        <Route path="/local-experts-hub" element={<LocalExpertsHub />} />
        <Route path="/signup-expert" element={<SignUpExpert />} />
        
        {/* Profiles Page for experts */}
        <Route path="/profiles/:category" element={<ProfilesPage />} /> 
        
        {/* Feedback Page after code validation */}
        <Route path="/enter-code" element={<EnterCode />} /> {/* Code input page */}
        <Route path="/feedback" element={<Feedback />} /> {/* Feedback form page */}
      </Routes>
    </Router>
  );
};

export default App;




// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Survey from "./components/Survey";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/survey" element={<Survey />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

