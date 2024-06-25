import React from "react";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="border-b border-neutral-900 px-2 pb-4 pt-12" id="about">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify">
              I am a dedicated and versatile full stack developer with a passion
              for creating efficient and user-friendly web applications. With 5
              years of professional experience, I have worked with a variety of
              technologies, including React, Next.js, Node.js, MySQL,
              PostgreSQL, and MongoDB. My journey in web development began with
              a deep curiosity for how things work, and it has evolved into a
              career where I continuously strive to learn and adapt to new
              challenges. I thrive in collaborative environments and enjoy
              solving complex problems to deliver high-quality solutions.
              Outside of coding, I enjoy staying active, exploring new
              technologies, and contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
