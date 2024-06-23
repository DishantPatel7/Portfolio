import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card relative bg-slate-400 rounded-2xl w-[300px] h-[400px] overflow-auto">
      <div className="absolute w-full h-full">
        <div className="bg-red-700 w-full h-[75%]">
          <img src={props.project.img} className="w-full h-full" />
        </div>

        {/* data */}
        <h2 className="px-5 py-3">{props.project.title}</h2>
      </div>
      <div className="absolute bg-blue-600 px-6 pt-16 w-full h-full opacity-0 hover:opacity-100">
        <h2 className="py-3 text-2xl">{props.project.title}</h2>
        <p>{props.project.description}</p>
        <div className="flex flex-wrap py-2 text-xs lg:text-sm gap-2">
          {props.project.technologies.map((tech, index) => {
            return (
              <span key={index} className="bg-red-500 rounded-md p-1">
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex gap-5 pt-6">
          <Link
            to={props.project.link1}
            target="blank"
            className="w-14 h-14 border-2 border-white text-white rounded-full flex justify-center items-center text-xl hover:bg-[#e5e5e5] hover:text-black hover:transition-all duration-500"
          >
            <FaExternalLinkAlt />
          </Link>
          <Link
            to={props.project.link2}
            target="blank"
            className="w-14 h-14 border-2 border-white text-white rounded-full flex justify-center items-center text-xl hover:bg-[#e5e5e5] hover:text-black hover:transition-all duration-500"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
