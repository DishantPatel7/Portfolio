import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  return (
    <motion.div
      // initial={{ opacity: 0, width: 0 }}
      // whileInView={{ opacity: 1, width: 600 }}
      // transition={{ duration: 1.5 }}
      className="group relative h-[450px] w-[580px] overflow-hidden rounded-2xl bg-neutral-800 lg:h-[490px] lg:w-[600px]"
    >
      <div className="duration-600 absolute h-full w-full transition-all group-hover:opacity-50">
        <div className="b-red-700 h-[75%] w-full">
          <img
            src={project.img}
            className="h-full w-full rounded-b-[150px] object-cover"
          />
        </div>
        <h2 className="py-7 text-center text-lg font-semibold text-primary group-hover:opacity-0 lg:text-xl">
          {project.title}
        </h2>
      </div>

      {/* data */}
      <div className="lg:pt-30 transition-al1 rotate-x-360 absolute h-full w-full translate-y-full transform bg-gradient-to-t from-[#212121] px-6 pt-10 opacity-0 duration-1000 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="min-h-72 lg:min-h-80">
          <h2 className="py-7 text-xl font-semibold text-primary lg:py-10 lg:text-2xl">
            {project.title}
          </h2>
          <p className="text-justify text-base font-semibold text-[#fff] lg:text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 py-3">
            {project.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="rounded bg-neutral-900 px-2 py-2 text-xs font-semibold text-secondary lg:text-sm"
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center gap-8 pt-5">
          <Link to={project.link1} target="_blank" className="card-social">
            <FaExternalLinkAlt />
          </Link>
          <Link to={project.link2} target="_blank" className="card-social">
            <FaGithub />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
