import React from "react";
import { EXPERIENCES } from "../../constants";

const Experience = () => {
  return (
    <div className="div-css" id="experience">
      <h2 className="h2-heading">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-300">{experience.year}</p>
            </div>
            <div className="w-full lg:w-3/4 lg:max-w-xl">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-primary">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-justify text-neutral-400">
                {experience.description}
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;