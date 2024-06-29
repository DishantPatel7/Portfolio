import React from "react";
import aboutImg from "../../assets/about.jpg";
import { ABOUT_US, EDUCATION } from "../../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="div-css" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} className="h2-heading">
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-[40%] lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <div className="flex flex-col justify-center pt-5 lg:justify-start">
            <p className="my-2 max-w-xl text-justify text-sm lg:text-base">
              {ABOUT_US}
            </p>
            <div className="my-5 max-w-xl text-left lg:text-justify">
              <h3 className="h3 pt-8">Education</h3>
              {EDUCATION.map((edu, index) => {
                return (
                  <div className="mt-9" key={index}>
                    <h5 className="flex flex-wrap items-center justify-between text-base tracking-tight">
                      {edu.degree}
                      <span className="text-xs text-primary">{edu.year}</span>
                    </h5>
                    <h4 className="text-2xl font-semibold leading-loose text-primary">
                      {edu.branch}
                    </h4>
                    <p className="pt-1 text-sm">{edu.institute}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
