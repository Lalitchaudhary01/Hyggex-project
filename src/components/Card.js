import React from "react";
import { FaSyncAlt, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BiScan } from "react-icons/bi";

const Card = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      {" "}
      {/* Increased mt-8 for extra space */}
      <div>
        <ul className="font-bold flex gap-10 text-gray-600 text-center">
          <li>Study</li>
          <li>Quiz</li>
          <li>Test</li>
          <li>Game</li>
          <li>Others</li>
        </ul>
      </div>
      <div className="font-bold bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white h-60 w-96 rounded-lg mt-4 flex justify-center items-center">
        9 + 6 + 7x - 2x - 3
      </div>
      <div className="mt-4 flex items-center justify-center space-x-4">
        <span className="mr-4 text-[#06286E]">
          <FaSyncAlt size={24} />
        </span>
        <span className="mr-4 bg-gradient-to-r from-[#06286E] to-[#164EC0] h-10 w-10 p-2 rounded-full text-white">
          <FaAngleLeft size={24} />
        </span>
        <span className="font-bold text-[#06286E]"> 1/10</span>
        <span className="mr-4 bg-gradient-to-r from-[#06286E] to-[#164EC0] h-10 w-10 p-2 rounded-full text-white">
          <FaAngleRight size={24} />
        </span>
        <span className="ml-4 mr-4 text-[#06286E]">
          <BiScan size={24} />
        </span>
      </div>
    </div>
  );
};

export default Card;
