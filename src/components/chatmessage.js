// src/components/ChatMessage.jsx
import React from 'react';

export default function ChatMessage({ message, sender }) {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} p-2 `}>
      <div
        className={` p-3 rounded-lg ${
          isUser ? 'bg-gray-500 text-black' : 'bg-gray-900 text-white'
        } max-w-xs`}
      >
        {message}
      </div>
    </div>
  );
}
