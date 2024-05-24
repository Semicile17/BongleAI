// src/components/ChatInterface.jsx
import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './chatmessage';
import InputBox from './inputbox';
import '../index.css'; // Import the CSS file

export default function ChatInterface({ isSideOpen }) {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message) => {
    if (message.trim()) {
      // Add user's message
      setMessages([...messages, { sender: 'user', message }]);
      
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', message: `Bot: ${message}` },
        ]);
      }, 1000); // Delay bot response for 1 second
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-black-100">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} message={msg.message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <InputBox onSendMessage={handleSendMessage} isSideOpen={isSideOpen} />
    </div>
  );
}
