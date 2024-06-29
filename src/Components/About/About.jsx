import React from "react";
import aboutImg from "../../assets/about.jpg";
import { ABOUT_US } from "../../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="div-css" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="h2-heading"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-[40%] lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="pt-7">
            <h2 className="h2">
              <span className="text-primary">Hi</span> 👋,
              <span className="text-primary">I'</span>m Dishant
            </h2>
            <p className="py-5 text-justify">
              <span className="font-semibold">Welcome to My Portfolio!</span>
              <br />
              {ABOUT_US}
            </p>
            <p className="font-semibold">
              Experience : <span className="font-normal">6 Months+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
