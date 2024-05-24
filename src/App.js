// App.jsx
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import InputBox from './components/inputbox';
import BongleImg from './assets/Images/favicon.png';
import ChatInterface from './components/chatinterface';

const App = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideOpen(!isSideOpen);
  };

  const handleSendMessage = (message) => {
    console.log("Message sent:", message);
    // Implement your logic to send the message here
  };

  return (
    <div className="w-full h-screen bg-black flex overflow-hidden">
      <Sidebar isSideOpen={isSideOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col w-full h-full relative transition-width duration-300">
        <div className="w-full flex flex-col items-end text-white">
          <div className="w-fit flex flex-row p-5">
            <img src={BongleImg} alt="icon_img" className="w-fit h-fit mr-1" />
            <h1 className="font-Kulim text-2xl">BongleAI</h1>
          </div>
        </div>
        
        {/* Main content area including the Chat Interface */}
        <ChatInterface isSideOpen={isSideOpen} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default App;
