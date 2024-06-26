import React from "react";
import { PROJECTS } from "../../constants";
import Card from "./Card";

const Project = () => {
  return (
    <div className="div-css" id="project">
      <h2 className="h2-heading">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {PROJECTS.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
