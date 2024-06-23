import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import Photo from "./Photo";

const Hero = () => {
  const downloadFile = () => {};

  return (
    <section className="h-full" id="hero">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-16 lg:pt-8 lg:pb-24">
          {/*text  */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Forntend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-primary">Dishant Patel</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A frontend developer who loves making websites easy to use and
              visually appealing. I enjoy creating interfaces that people enjoy
              using and find helpful.
              {/* I excel at crafting elegant digital experiences and I am 
              proficient in various programming languages and technologies. */}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-8">
              <a href="Dishant's Resume.pdf" download="Dishant's Resume">
                <button className="text-primary border-2 outline-0 border-primary flex items-center px-5 py-2 gap-2 font-bold text-[15px] rounded-3xl hover:bg-primary hover:text-black hover:transition-all duration-500">
                  <span>Download CV </span>
                  <FiDownload />
                </button>
              </a>
              <div className="mb-8 lg:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-green-400 text-green-400 rounded-full flex justify-center items-center text-base hover:bg-green-400 text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/*Photo  */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
