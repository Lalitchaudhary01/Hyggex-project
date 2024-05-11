import React from "react";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        {/* Company logo goes here */}
        <img
          src="path_to_your_logo"
          alt="Company Logo"
          className="h-8 w-8 rounded-full"
        />
        <span className="font-bold text-[#06286E]">Hyggex</span>
      </div>
      <div className="flex items-center space-x-2">
        {/* Oval shape */}
        <div className="bg-gradient-to-r from-[#06286E] to-[#164EC0] rounded-full h-8 w-8 flex items-center justify-center text-white">
          <FaPlus size={20} />
        </div>
        <span className="mr-2 font-bold text-[#06286E] ">
          Create Flashcards
        </span>
      </div>
    </div>
  );
};

export default Footer;
