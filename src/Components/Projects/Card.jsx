import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="group relative h-[450px] w-[320px] overflow-hidden rounded-2xl bg-neutral-900 lg:h-[500px] lg:w-[380px]">
      <div className="duration-600 absolute h-full w-full transition-all group-hover:opacity-50">
        <div className="b-red-700 h-[75%] w-full">
          <img
            src={props.project.img}
            className="h-full w-full rounded-b-[180px]"
          />
        </div>

        {/* data */}
        <h2 className="py-7 text-center text-base font-semibold text-primary group-hover:opacity-0 lg:text-xl">
          {props.project.title} | ReactJS
        </h2>
      </div>
      <div className="lg:pt-30 transition-al1 absolute h-full w-full translate-y-full bg-gradient-to-t from-[#000000] px-6 pt-14 opacity-0 duration-1000 group-hover:translate-y-0 group-hover:opacity-100">
        <h2 className="py-8 text-xl font-semibold text-primary lg:py-10 lg:text-2xl">
          {props.project.title}
        </h2>
        <p className="text-base font-semibold">{props.project.description}</p>
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
