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
    <div className='flex mb-5 ml-5 mr-5'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="flex-grow md:m-2 p-3 w-full bg-gray-900 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 z-5"
        placeholder="Type your message here..."
      />
      <button className="bg-gray-700 text-white p-3 rounded-r-lg border" onClick={handleSendClick}>
        <FaPaperPlane className='h-6 w-5' />
      </button>
    </div>
  );
}
