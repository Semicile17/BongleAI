
import { FaPaperPlane } from 'react-icons/fa';

export default function Input() {
    return (
        <div className="fixed bottom-0 w-full bg-black flex items-center p-5 z-5">
      <input 
        type="text" 
        className="flex-grow p-3 bg-gray-900 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500" 
        placeholder="Type your message here..." 
      />
      <button className="bg-gray-700 text-white p-3 rounded-r-lg border">
      <FaPaperPlane className='h-6 w-5' />
      </button>
    </div>
    );
}