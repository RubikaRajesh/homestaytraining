import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Templates from "./components/Templates";
import Modules from "./components/Modules";
import Feedback from "./components/Feedback";
import Survey from "./components/Survey";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login"
import Register from "./components/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
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

