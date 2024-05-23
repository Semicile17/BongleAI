// App.jsx
import Sidebar from "./components/sidebar";
import Input from "./components/inputbox";
import BongleImg from "./assets/Images/favicon.png";

function App() {
  return (
    <div className="w-full h-screen bg-black flex">
      <Sidebar />

      <div className=" relative  flex flex-col w-full h-full">
        <div className="w-full flex flex-col items-end text-white">
          <div className="w-fit flex flex-row p-5">
            <img src={BongleImg} alt="icon_img" className="w-fit h-fit mr-1" />
            <h1 className="font-Kulim text-2xl">BongleAI</h1>
          </div>
        </div>
        
        {/* This div ensures the main content area grows to fill the space */}
        <div className="flex-grow"></div>
        
        {/* Input component fixed at the bottom */}
        <Input />
      </div>
    </div>
  );
}

export default App;
