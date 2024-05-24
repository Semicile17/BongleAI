// src/components/InputBox.jsx
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function InputBox({ onSendMessage, isSideOpen }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    onSendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div className="w-full  h-fit fixed bottom-0 bg-black flex items-center p-5 z-15">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="flex-grow p-3 bg-gray-900 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500"
        placeholder="Type your message here..."
      />
      <button className="bg-gray-700 text-white p-3 rounded-r-lg border" onClick={handleSendClick}>
        <FaPaperPlane className='h-6 w-5' />
      </button>
    </div>
  );
}
