import React from "react";
import { Search } from "lucide-react"; 
import { IoIosArrowDropdownCircle } from "react-icons/io";
const Header = () => {
  return (
    <div className="bg-gradient-to-b absolute  from-black flex items-center justify-between p-4 w-full">
      <img
        className="w-36"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="netflix logo"
      />

      <div className="flex items-center text-white">
        <IoIosArrowDropdownCircle color="white" />
        <h1 className="text-lg font-medium ">Sumit Sharma</h1>

        {/* 🔍 Search Icon Button */}
        <button className="ml-4 p-2 bg-zinc-800 rounded-full hover:bg-zinc-700">
          <Search className="w-5 h-5 text-white" />
        </button>

        {/* 🚪 Logout & Search Movie Buttons */}
        <div className="ml-4 flex gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            LogOut
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
