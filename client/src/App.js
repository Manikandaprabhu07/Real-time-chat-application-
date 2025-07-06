import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", { message });
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data.message]);
    });
  }, []);

  return (
    <div className="App">
      <h2>🗨️ Real-Time Chat</h2>
      <div className="chat-box">
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;