import React, { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0); // Current selected rating
  const [feedback, setFeedback] = useState(""); // User feedback text

  // Function to handle star selection
  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rating: ${rating}\nFeedback: ${feedback}`);
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Guest Feedback & Rating</h2>

      {/* Star Rating Section */}
      <div className="flex space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            filled={star <= rating}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// Star Component
const Star = ({ filled, onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-8 cursor-pointer ${
        filled ? "text-yellow-400" : "text-gray-300"
      }`}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.8a1 1 0 00.95.69h5.044c.969 0 1.371 1.24.588 1.81l-4.078 2.956a1 1 0 00-.364 1.118l1.563 4.8c.3.921-.755 1.688-1.54 1.118l-4.078-2.956a1 1 0 00-1.176 0l-4.078 2.956c-.784.57-1.838-.197-1.54-1.118l1.562-4.8a1 1 0 00-.364-1.118L3.905 10.227c-.783-.57-.381-1.81.588-1.81h5.044a1 1 0 00.95-.69l1.562-4.8z"
      />
    </svg>
  );
};

export default Feedback;

