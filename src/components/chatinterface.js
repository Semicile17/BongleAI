import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './chatmessage';
import InputBox from './inputbox';
import axios from 'axios';
import '../index.css'; // Import the CSS file

export default function ChatInterface({ isSideOpen }) {
  const [messages, setMessages] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageContent) => {
    if (messageContent.trim()) {
      setIsBotTyping(true);
  
      // Add user's message
      const updatedMessages = [
        ...messages,
        { sender: 'user', content: messageContent, type: 'text' },
      ];
      setMessages(updatedMessages);
  
      // Check if the message contains the phrase "generate image"
      if (messageContent.toLowerCase().includes('generate image')) {
        try {
          const response = await axios.post('http://127.0.0.1:4000/prompt', { message: messageContent });
          const sketchBase64 = response.data;
  
          // Add the bot's response with the base64 image
          const updatedBotResponse = [
            ...updatedMessages,
            { sender: 'bot', content: sketchBase64, type: 'image' },
          ];
          setMessages(updatedBotResponse);
        } catch (error) {
          console.error('Error sending message to backend:', error);
        }
      } else {
        // Send the message to the default prompt endpoint
        try {
          const response = await axios.post('https://bongle-server.vercel.app/api/v1/prompt', { prompt: messageContent });
       
          const text = response.data.resp;
  
          // Add the bot's response with the text message
          const updatedBotResponse = [
            ...updatedMessages,
            { sender: 'bot', content: text.toString(), type: 'text' },
          ];
          setMessages(updatedBotResponse);
        } catch (error) {
          console.error('Error sending message to backend:', error);
        }
      }
  
      setIsBotTyping(false);
  
      // Scroll to bottom after bot responds
      scrollToBottom();
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-black-100 overflow-hidden"> {/* Added overflow-hidden */}
    <div className="flex-grow p-4 overflow-y-auto chat-container" style={{ maxHeight: 'calc(100% - 3rem)' }}>
      {messages.map((msg, index) => (
        <ChatMessage key={index} sender={msg.sender} message={msg.content} type={msg.type} />
      ))}
      {isBotTyping && (
          <ChatMessage sender="bot" message="" type="text" isTyping={true} />
        )} {/* Loading animation */}
      <div ref={messagesEndRef} />
    </div>
    <InputBox onSendMessage={handleSendMessage} isSideOpen={isSideOpen} />
  </div>
);
}
