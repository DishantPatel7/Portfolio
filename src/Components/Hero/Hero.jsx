import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import Photo from "./Photo";
import { HERO_CONTENT } from "../../constants";

const Hero = () => {
  return (
    <section className="h-full lg:pt-32" id="home">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between pt-16 lg:flex-row lg:pb-24 lg:pt-5">
          {/*text  */}
          <div className="order-2 text-center lg:order-none lg:text-left">
            <span className="text-xl">Forntend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-primary">Dishant Patel</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-black dark:text-white/80 ">
              {HERO_CONTENT}
              {/* I excel at crafting elegant digital experiences and I am 
              proficient in various programming languages and technologies. */}
            </p>
            {/* btn and socials */}
            <div className="flex flex-row flex-wrap items-center justify-center gap-5 lg:justify-start">
              <a href="Dishant CV.pdf" download="Dishant's Resume">
                <button className="flex items-center gap-3 rounded-3xl border-2 border-primary px-5 py-2 text-[16px] font-bold text-black dark:text-primary outline-0 duration-500 hover:bg-black dark:hover:bg-primary hover:text-primary dark:hover:text-black hover:transition-all">
                  <span>Download CV</span>
                  <FiDownload className="text-base" />
                </button>
              </a>
              <a href="#contact">
                <button className="flex items-center gap-2 rounded-3xl border-2 border-primary bg-primary px-5 py-2 text-[16px] font-bold text-black outline-0 duration-500 hover:bg-black hover:text-primary hover:transition-all">
                  <span>Hire Me</span>
                </button>
              </a>
            </div>
            <div className="mb-8 mt-8 flex justify-center lg:mb-0 lg:justify-start">
              <Socials
                containerStyle="flex gap-6"
                iconStyle="w-10 h-10 border-2 border-primary rounded-full flex justify-center items-center text-lg hover:bg-black dark:hover:bg-primary text-black dark:text-primary hover:text-primary dark:hover:text-black hover:transition-all duration-150"
              />
            </div>
          </div>

          {/*Photo  */}
          <div className="order-1 mb-8 lg:order-none lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
