import React from "react";
import { PROJECTS } from "../../constants";
import Card from "./Card";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="div-css" id="project">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="h2-heading"
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {PROJECTS.map((project) => {
          return <Card key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
