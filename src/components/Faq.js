import React, { useState } from "react";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="m-8">
      <span className="font-bold text-[#06286E] text-6xl">FAQ</span>
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <button
            onClick={() => setIsOpen1(!isOpen1)}
            className="flex justify-between items-center w-full py-2 px-4 text-left text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-[#06286E] rounded-lg"
            style={{ border: isOpen1 ? "2px solid black" : "none" }}
          >
            Can education flashcards be used for all age groups?
            <svg
              className={`${
                isOpen1 ? "transform rotate-180" : ""
              } w-5 h-5 text-[#06286E] transition-transform duration-300`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 7.293a1 1 0 011.414 0L10 8.414l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen1 && (
            <p className="mt-2 text-gray-600">
              Yes, education flashcards are designed to be effective for
              learners of all ages, from children to adults.
            </p>
          )}
        </div>
        <div className="border-b border-gray-200">
          <button
            onClick={() => setIsOpen2(!isOpen2)}
            className="flex justify-between items-center w-full py-2 px-4 text-left text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-[#06286E] rounded-lg"
            style={{ border: isOpen2 ? "2px solid black" : "none" }}
          >
            How can I create my own flashcards?
            <svg
              className={`${
                isOpen2 ? "transform rotate-180" : ""
              } w-5 h-5 text-[#06286E] transition-transform duration-300`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 7.293a1 1 0 011.414 0L10 8.414l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen2 && (
            <p className="mt-2 text-gray-600">
              You can create your own flashcards using various tools and
              platforms. Some popular methods include using digital flashcard
              apps, designing them on paper or cards, or using online flashcard
              generators.
            </p>
          )}
        </div>
        <div className="border-b border-gray-200">
          <button
            onClick={() => setIsOpen3(!isOpen3)}
            className="flex justify-between items-center w-full py-2 px-4 text-left text-lg font-semibold focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-[#06286E] rounded-lg"
            style={{ border: isOpen3 ? "2px solid black" : "none" }}
          >
            Are flashcards effective for exam preparation?
            <svg
              className={`${
                isOpen3 ? "transform rotate-180" : ""
              } w-5 h-5 text-[#06286E] transition-transform duration-300`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 7.293a1 1 0 011.414 0L10 8.414l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen3 && (
            <p className="mt-2 text-gray-600">
              Yes, flashcards are a popular and effective study tool for exam
              preparation. They help in summarizing key information, reinforcing
              learning through repetition, and improving retention and recall.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
