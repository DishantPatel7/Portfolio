import React from "react";
import { PROJECTS } from "../constants";
import Card from "./Card";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-2 pt-12" id="project">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap gap-7 justify-center items-center">
        {PROJECTS.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
