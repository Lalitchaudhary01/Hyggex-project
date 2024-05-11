import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Heading = () => {
  return (
    <div className="ml-5">
      <div className="ml-10 flex">
        <FaHome size={24} /> {/* Set size to 24 */}
        <IoIosArrowBack size={24} /> {/* Set size to 24 */}
        <p className="text-gray-600 font-bold">FlashCards</p>
        <IoIosArrowBack size={24} /> {/* Set size to 24 */}
        <p className="text-gray-600 font-bold">MatheMatics</p>
        <IoIosArrowBack size={24} /> {/* Set size to 24 */}
        <p className="font-bold text-[#06286E]">Relation and Function</p>
      </div>
    </div>
  );
};

export default Heading;
