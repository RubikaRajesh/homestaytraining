// import React from "react";
// import Feedback from "./Feedback";
// import ChatBox from "./ChatBox";
// import Templates from "./Templates";
// import Modules from "./Modules";

// const Home = () => {
//   return (
//     <div className="p-6">

//       {/* Templates Section */}
//       <div id="templates" className="mt-8">
//         <Templates />
//       </div>

//       {/* Training Modules Section */}
//       <div id="modules" className="mt-8">
//         <Modules />
//       </div>

//       {/* Feedback */}
//       <Feedback />

//       {/* Peer-to-Peer Chatbox */}
//       <ChatBox />
//     </div>
//   );
// };

// export default Home;





// import React from "react";

// const Home = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Welcome to Homestay Training</h2>
//       <p className="text-gray-600">
//         Your one-stop platform for mastering homestay management.
//       </p>
//     </div>
//   );
// };

// export default Home;




import React, { useState } from "react";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "What is Airbnb and how does it work?",
      answer:
        "Airbnb is a platform where people can list, discover, and book accommodations around the world.",
    },
    {
      question: "How do I use search filters?",
      answer: "You can use filters to narrow down your search by price, location, amenities, and more.",
    },
    {
      question: "Do I need to meet my Host?",
      answer: "Not necessarily. Many bookings are self-check-in, and you might not meet the Host.",
    },
    {
      question: "What if I need to cancel due to a problem with the listing or Host?",
      answer:
        "You can contact Airbnb support for assistance with cancellations due to issues with the listing or host.",
    },
    {
      question: "Need more information?",
      answer: "Visit Airbnb's help center for more details and support.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}>
      {/* <header style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to Our Platform</h1>
      </header> */}

      <main>
        <img
          src="https://images.pexels.com/photos/14136902/pexels-photo-14136902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace this with your image URL
          alt="Main"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />
<div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
  <div
    style={{
      textAlign: "center",
      maxWidth: "300px",
      padding: "20px",
      background: "linear-gradient(135deg, #a8e063, #56ab2f)", // Consistent green gradient
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }}
  >
    <h3 style={{ color: "#fff", marginBottom: "10px" }}>Book with Confidence</h3>
    <p style={{ color: "#fff" }}>
      Get 24/7 support and discover helpful reviews from our trusted community.
    </p>
  </div>

  <div
    style={{
      textAlign: "center",
      maxWidth: "300px",
      padding: "20px",
      background: "linear-gradient(135deg, #a8e063, #56ab2f)", // Same consistent gradient
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }}
  >
    <h3 style={{ color: "#fff", marginBottom: "10px" }}>Get the Amenities You Want</h3>
    <p style={{ color: "#fff" }}>
      Help your group feel at home with great extras and space to spread out.
    </p>
  </div>

  <div
    style={{
      textAlign: "center",
      maxWidth: "300px",
      padding: "20px",
      background: "linear-gradient(135deg, #a8e063, #56ab2f)", // Same consistent gradient
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }}
  >
    <h3 style={{ color: "#fff", marginBottom: "10px" }}>Keep It Flexible</h3>
    <p style={{ color: "#fff" }}>
      Stay with flexible cancellation to make it easy to rebook if plans change.
    </p>
  </div>
</div>

{/* 
        <section style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
          <h2>Your Questions, Answered</h2>
          {questionsAndAnswers.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <div
                onClick={() => toggleAnswer(index)}
                style={{
                  background: "#f7f7f7",
                  padding: "10px",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                }}
              >
                {item.question}
              </div>
              {activeQuestion === index && (
                <div
                  style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderTop: "none",
                    background: "#fff",
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </section> */}
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
  <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}>
    Your Questions, Answered
  </h2>
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
      overflow: "hidden",
    }}
  >
    <details
      style={{
        padding: "15px",
        borderBottom: "1px solid #ddd",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
    >
      <summary
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          outline: "none",
        }}
      >
        What is Airbnb and how does it work?
      </summary>
      <p style={{ paddingTop: "10px", fontSize: "16px", lineHeight: "1.5" }}>
        Airbnb is an online platform that connects people who want to rent out
        their homes with people looking for accommodations. Hosts list their
        properties, and guests can book them directly.
      </p>
    </details>
    <details
      style={{
        padding: "15px",
        borderBottom: "1px solid #ddd",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
    >
      <summary
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          outline: "none",
        }}
      >
        How do I use search filters?
      </summary>
      <p style={{ paddingTop: "10px", fontSize: "16px", lineHeight: "1.5" }}>
        Search filters allow you to narrow down your search by criteria like
        price, location, type of property, and more. Simply apply the filters
        that match your preferences.
      </p>
    </details>
    <details
      style={{
        padding: "15px",
        borderBottom: "1px solid #ddd",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
    >
      <summary
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          outline: "none",
        }}
      >
        Do I need to meet my host?
      </summary>
      <p style={{ paddingTop: "10px", fontSize: "16px", lineHeight: "1.5" }}>
        No, meeting your host is not mandatory. Many bookings are managed
        remotely, and hosts often provide a key or access code for self-check-in.
      </p>
    </details>
    <details
      style={{
        padding: "15px",
        cursor: "pointer",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
    >
      <summary
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          outline: "none",
        }}
      >
        What if I need to cancel due to a problem with the listing or host?
      </summary>
      <p style={{ paddingTop: "10px", fontSize: "16px", lineHeight: "1.5" }}>
        If you encounter a problem, you can contact Airbnb support for help.
        They may offer alternatives or a refund, depending on the situation.
      </p>
    </details>
  </div>
</div>

      </main>
    </div>
  );
}

export default App;

