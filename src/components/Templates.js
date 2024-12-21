// import React from "react";

// const Templates = () => {
//   return (
//     <div className="bg-gray-100 p-6 rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Download Templates</h2>
//       <ul className="list-disc pl-5">
//         <li>Booking Forms</li>
//         <li>Maintenance Checklists</li>
//         <li>Guest Communication Guides</li>
//       </ul>
//       <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//         Download All Templates
//       </button>
//     </div>
//   );
// };

// export default Templates;



// import React from "react";

// const Templates = () => {
//   // Function to handle the download button click
//   const handleDownload = () => {
//     // Simulate downloading templates as a ZIP file
//     alert("Your templates are being downloaded!");
//     // You can replace the alert with actual file download logic
//     // window.location.href = "/path/to/your/templates.zip";
//   };

//   return (
//     <div
//       className="bg-gradient-to-br from-green-100 to-blue-50 p-8 rounded-xl shadow-lg max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
//       style={{ textAlign: "center" }}
//     >
//       <h2 className="text-3xl font-extrabold mb-4 text-blue-700">
//         Download Templates
//       </h2>
//       <p className="text-gray-600 mb-6">
//         Get access to essential templates for seamless management.
//       </p>
//       <ul className="list-inside list-check text-left text-gray-800 mb-6">
//         <li className="mb-2">
//           <span role="img" aria-label="check">
//             ✅
//           </span>{" "}
//           Booking Forms
//         </li>
//         <li className="mb-2">
//           <span role="img" aria-label="check">
//             ✅
//           </span>{" "}
//           Maintenance Checklists
//         </li>
//         <li>
//           <span role="img" aria-label="check">
//             ✅
//           </span>{" "}
//           Guest Communication Guides
//         </li>
//       </ul>
//       <button
//         onClick={handleDownload}
//         className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold px-6 py-3 rounded-full hover:from-green-400 hover:to-blue-500 hover:scale-105 transition-transform duration-300"
//       >
//         Download All Templates
//       </button>
//     </div>
//   );
// };

// export default Templates;





import React, { useState } from "react";

const Templates = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const templates = [
    { id: 1, name: "Booking Forms", pdfUrl: "https://www.iamai.in/sites/default/files/research/Homestays%20%282%29.pdf" },
    { id: 2, name: "Maintenance Checklists", pdfUrl: "/path/to/maintenance-checklist.pdf" },
    { id: 3, name: "Guest Communication Guides", pdfUrl: "/path/to/guest-communication-guide.pdf" },
  ];

  // Function to handle checkbox toggle
  const handleCheckboxChange = (template) => {
    if (selectedItems.includes(template.id)) {
      // If the template is already selected, remove it from the list
      setSelectedItems(selectedItems.filter((item) => item !== template.id));
    } else {
      // If the template is not selected, add it to the list
      setSelectedItems([...selectedItems, template.id]);
    }
  };

  // Function to handle download of selected templates
  const handleDownload = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one template to download.");
      return;
    }

    // Loop through the selected items and trigger download for each
    selectedItems.forEach((itemId) => {
      const template = templates.find((template) => template.id === itemId);

      if (template) {
        const link = document.createElement("a");
        link.href = template.pdfUrl;
        link.download = template.name + ".pdf"; // Set the file name when downloading
        link.click(); // Trigger the download
      }
    });

    alert(
      `Downloading the following templates: ${selectedItems
        .map((item) => templates.find((template) => template.id === item).name)
        .join(", ")}`
    );
  };

  return (
    <div
      className="bg-gradient-to-br from-green-100 to-blue-50 p-8 rounded-xl shadow-lg max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
      style={{ textAlign: "center", marginTop:"120px"}}
    >
      <h2 className="text-3xl font-extrabold mb-4 text-blue-700">
        Download Templates
      </h2>
      <p className="text-gray-600 mb-6">
        Select the templates you need and download them in one click.
      </p>
      <form className="text-left mb-6">
        {templates.map((template) => (
          <div key={template.id} className="mb-4 flex items-center">
            <input
              type="checkbox"
              id={`template-${template.id}`}
              checked={selectedItems.includes(template.id)} // Check if the item is selected
              onChange={() => handleCheckboxChange(template)} // Toggle the item
              className="mr-3 h-5 w-5 text-blue-500 focus:ring focus:ring-blue-200 rounded"
            />
            <label
              htmlFor={`template-${template.id}`}
              className="text-gray-800"
            >
              {template.name}
            </label>
          </div>
        ))}
      </form>
      <button
        onClick={handleDownload}
        className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold px-6 py-3 rounded-full hover:from-green-400 hover:to-blue-500 hover:scale-105 transition-transform duration-300"
      >
        Download Selected Templates
      </button>
    </div>
  );
};

export default Templates;
