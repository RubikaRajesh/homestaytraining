import React, { useState } from "react";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questionsAndAnswers = [
    {
      question: "Why is homestay training important?",
      answer:
        "Homestay training equips owners with skills to improve guest satisfaction, optimize resources, and increase their business potential.",
    },
    {
      question: "What topics are covered in the training?",
      answer: "The training covers hospitality, guest communication, cultural exchange, marketing, and financial management.",
    },
    {
      question: "How can I enroll in the training program?",
      answer: "Visit our website, navigate to the 'Training Programs' section, and register for the upcoming sessions.",
    },
    {
      question: "Are there any certification programs?",
      answer: "Yes, participants receive a certificate upon completing the training modules successfully.",
    },
    {
      question: "Where can I find additional resources?",
      answer: "Our website features a 'Resources' section with articles, videos, and templates tailored for homestay owners.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}>
      <main>
        <img
          src="https://images.pexels.com/photos/14136902/pexels-photo-14136902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Main"
          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
        />

        <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "300px",
              padding: "20px",
              background: "linear-gradient(135deg, #56ab2f,rgb(124, 236, 84))",
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
            <h3 style={{ color: "#fff", marginBottom: "10px" }}>Enhance Hospitality Skills</h3>
            <p style={{ color: "#fff" }}>
              Master the art of creating memorable guest experiences and exceptional service.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              maxWidth: "300px",
              padding: "20px",
              background: "linear-gradient(135deg, #56ab2f,rgb(124, 236, 84))",
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
            <h3 style={{ color: "#fff", marginBottom: "10px" }}>Expand Marketing Reach</h3>
            <p style={{ color: "#fff" }}>
              Learn effective strategies to promote your homestay and attract more guests.
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              maxWidth: "300px",
              padding: "20px",
              background: "linear-gradient(135deg, #56ab2f,rgb(124, 236, 84))",
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
            <h3 style={{ color: "#fff", marginBottom: "10px" }}>Optimize Your Resources</h3>
            <p style={{ color: "#fff" }}>
              Discover techniques to manage your homestay efficiently and boost profitability.
            </p>
          </div>
        </div>

        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}>
            Frequently Asked Questions
          </h2>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            {questionsAndAnswers.map((item, index) => (
              <details
                key={index}
                style={{
                  padding: "15px",
                  borderBottom: index < questionsAndAnswers.length - 1 ? "1px solid #ddd" : "none",
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
                  {item.question}
                </summary>
                <p style={{ paddingTop: "10px", fontSize: "16px", lineHeight: "1.5" }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
