import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to Homestay Training Platform</h1>
      <div className="space-x-4">
        <Link to="/register">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
