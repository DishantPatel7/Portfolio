import React from "react";
import { PROJECTS } from "../constants";
import Card from "./Card";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 px-2 pb-4 pt-12" id="project">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {PROJECTS.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
