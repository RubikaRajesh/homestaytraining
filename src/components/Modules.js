// import React from "react";

// const Modules = () => {
//   return (
//     <div className="bg-gray-100 p-6 rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Training Modules</h2>
//       <ul className="list-disc pl-5">
//         <li>Hospitality Management</li>
//         <li>Property Maintenance</li>
//         <li>Digital Marketing</li>
//       </ul>
//     </div>
//   );
// };

// export default Modules;

import React, { useState } from "react";

const Modules = () => {
  const [expandedModule, setExpandedModule] = useState(null); // Track the currently expanded module

  const modules = [
    {
      id: 1,
      name: "Hospitality Management",
      description: "Learn the essentials of hospitality management, including guest services and operations.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    },
    {
      id: 2,
      name: "Property Maintenance",
      description: "Master property maintenance techniques to keep facilities in top-notch condition.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    },
    {
      id: 3,
      name: "Digital Marketing",
      description: "Understand the principles of digital marketing and grow your online presence.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
    },
  ];

  const handleExpand = (id) => {
    // Toggle the expansion of a module
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-50 p-8 rounded-xl shadow-lg max-w-4xl mx-auto hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center">
        Training Modules
      </h2>
      <div className="space-y-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleExpand(module.id)}
            >
              <h3 className="text-xl font-bold text-gray-800">
                {module.name}
              </h3>
              <button
                className={`text-blue-500 font-semibold transition-transform ${
                  expandedModule === module.id ? "rotate-180" : ""
                }`}
              >
                {expandedModule === module.id ? "▲" : "▼"}
              </button>
            </div>
            {expandedModule === module.id && (
              <div className="mt-4">
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    controls
                    src={module.videoUrl}
                    className="rounded-md shadow-lg"
                  ></video>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
