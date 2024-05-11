import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Footer from "./Footer";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <Heading />

      <div className="text-3xl  ml-16 mt-10 font-bold text-[#06286E]">
        Relations and Functions ( Mathematics )
      </div>
      <Card />
      <Footer />
      <Faq />
    </>
  );
};

export default Home;
