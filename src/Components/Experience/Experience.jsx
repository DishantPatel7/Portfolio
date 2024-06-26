import React from "react";
import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="div-css" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="h2-heading"
      >
        Experience
      </motion.h2>
      <motion.div
      // initial={{ opacity: 0, x: -100 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1.5, delay: .5}}
      >
        {EXPERIENCES.map((experience) => (
          <div key={experience.id} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-300">{experience.year}</p>
            </motion.div>
            <div className="w-full lg:w-3/4 lg:max-w-xl">
              <motion.h6
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="mb-2 font-semibold"
              >
                {experience.role} -{" "}
                <span className="text-sm text-primary">
                  {experience.company}
                </span>
              </motion.h6>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: .3 }}
                className="mb-4 text-justify text-neutral-400"
              >
                {experience.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, damping: 1, delay: .4 }}
                className="flex flex-wrap gap-4 py-3"
              >
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-2 py-1 text-sm font-semibold text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
