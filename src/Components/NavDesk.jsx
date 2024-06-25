import React from "react";
import { Link } from "react-router-dom";

const NavDesk = () => {
  const links = [
    { name: "home", path: "/home" },
    { name: "experience", path: "/experience" },
    { name: "project", path: "/project" },
    { name: "education", path: "/education" },
    { name: "contact", path: "/contact" },
  ];
  return (
    <>
      <nav className="flex items-center gap-5">
        {links.map((link, index) => {
          return (
            <Link to={link.path} key={index} className="capitalize">
              {link.name}
            </Link>
          );
        })}
        <Link to="/">
          <button className="rounded-[7px] bg-purple-500 p-2">Hire Me</button>
        </Link>
      </nav>
    </>
  );
};

export default NavDesk;
