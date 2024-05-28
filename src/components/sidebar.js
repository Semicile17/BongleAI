import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Sidebar({ isSideOpen, toggleSidebar }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isSideOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static z-10 transition-transform duration-300 ease-in-out w-64 bg-[#3D4143] text-white`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center lg:hidden">
            <span className="text-xl font-semibold"></span>
            <button onClick={toggleSidebar}>
              {isSideOpen ? <FiX className="h-6 w-6 text-white" /> : <FiMenu className="h-6 w-6 text-white" />}
            </button>
          </div>
          <div className="mt-8 flex flex-col">
            <div>
              Profile section
            </div>
           <div className='flex flex-col fixed bottom-12 w-full items-center'>
           <button className='w-3/4 h-10 border-2 rounded-xl font-Kulim hover:text-black hover:bg-white'>Login</button>
           <div className='h-4'></div>
            <button className='w-3/4 h-10 border-2 rounded-xl font-Kulim  hover:text-black hover:bg-white'>Sign Up</button>
           </div>
          </div>
        </div>
      </div>

      {/* Content area and Hamburger button */}
      <div className="flex-1 lg:hidden">
        {!isSideOpen && (
          <button
            className="fixed top-4 left-4 z-50 p-2 text-white"
            onClick={toggleSidebar}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}
