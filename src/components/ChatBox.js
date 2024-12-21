import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Peer-to-Peer Forum</h2>
      <div className="h-48 overflow-y-scroll bg-white border p-2 rounded mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="p-1 border-b">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border rounded-l"
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
