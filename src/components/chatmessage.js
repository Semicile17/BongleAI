import React from 'react';
// Import user icon if needed
import botIcon from '../assets/Images/favicon.ico'; // Import bot icon
import userIcon from '../assets/Images/user.ico'
export default function ChatMessage({ message, sender, type, isTyping }) {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} p-2`}>
      <div className={`flex items-center ${isUser ? 'flex-row-reverse' : ''}`}>
        {/* Icon for the message */}
        <div className={`icon ${isUser ? 'ml-2' : 'mr-2'}`}>
          {isUser ? (
            <img src={userIcon} alt="User Icon" className="w-6 h-6" />
          ) : (
            <img src={botIcon} alt="Bot Icon" className="w-6 h-6" />
          )}
        </div>

        <div
          className={`p-3 rounded-lg ${
            isUser ? 'bg-gray-500 text-black' : 'bg-gray-900 text-white'
          } max-w-xs`}
        >
          {isTyping ? (
            <div className="loader"></div>
          ) : type === 'image' ? (
            <img 
              src={`data:image/png;base64,${message}`} 
              alt="Chat Image" 
              className="max-w-full rounded-lg" 
            />
          ) : (
            <span>{message}</span>
          )}
        </div>
      </div>
    </div>
  );
}
