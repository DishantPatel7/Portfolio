import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="relative h-[450px] w-[320px] overflow-auto rounded-2xl bg-slate-400 lg:h-[500px] lg:w-[380px]">
      <div className="absolute h-full w-full">
        <div className="h-[75%] w-full bg-red-700">
          <img
            src={props.project.img}
            className="h-full w-full rounded-b-[180px]"
          />
        </div>

        {/* data */}
        <h2 className="px-5 py-3">{props.project.title}</h2>
      </div>
      <div className="absolute h-full w-full bg-gradient-to-t from-[#000] px-6 pt-20 opacity-0 hover:opacity-100 lg:pt-32">
        <h2 className="py-3 text-2xl">{props.project.title}</h2>
        <p>{props.project.description}</p>
        <div className="flex flex-wrap gap-2 py-3">
          {props.project.technologies.map((tech, index) => {
            return (
              <span
                key={index}
                className="rounded bg-neutral-900 px-2 py-2 text-xs font-medium text-secondary lg:text-sm"
              >
                {tech}
              </span>
            );
          })}
        </div>
        <div className="flex gap-5 pt-5">
          <Link
            to={props.project.link1}
            target="blank"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-xl text-white duration-500 hover:bg-[#e5e5e5] hover:text-black hover:transition-all"
          >
            <FaExternalLinkAlt />
          </Link>
          <Link
            to={props.project.link2}
            target="blank"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-xl text-white duration-500 hover:bg-[#e5e5e5] hover:text-black hover:transition-all"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
