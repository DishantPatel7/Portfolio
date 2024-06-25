import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import Photo from "./Photo";

const Hero = () => {
  return (
    <section className="h-full" id="hero">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between pt-16 lg:flex-row lg:pb-24 lg:pt-8">
          {/*text  */}
          <div className="order-2 text-center lg:order-none lg:text-left">
            <span className="text-xl">Forntend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-primary">Dishant Patel</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              A frontend developer who loves making websites easy to use and
              visually appealing. I enjoy creating interfaces that people enjoy
              using and find helpful.
              {/* I excel at crafting elegant digital experiences and I am 
              proficient in various programming languages and technologies. */}
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-start">
              <a href="Dishant's Resume.pdf" download="Dishant's Resume">
                <button className="flex items-center gap-2 rounded-3xl border-2 border-primary px-5 py-2 text-[15px] font-bold text-primary outline-0 duration-500 hover:bg-primary hover:text-black hover:transition-all">
                  <span>Download CV </span>
                  <FiDownload />
                </button>
              </a>
              <a href="">
                <button className="flex items-center gap-2 rounded-3xl border-2 border-primary px-5 py-2 text-[15px] font-bold text-primary outline-0 duration-500 hover:bg-primary hover:text-black hover:transition-all">
                  <span>Hire Me</span>
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
          <div className="order-1 mb-8 lg:order-none lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
