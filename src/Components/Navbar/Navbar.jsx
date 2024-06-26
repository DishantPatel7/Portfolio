import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
import NavMobile from "./NavMobile";

const links = [
  { name: "home", path: "/home" },
  { name: "experience", path: "/experience" },
  { name: "project", path: "/project" },
  { name: "education", path: "/education" },
  { name: "contact", path: "/contact" },
  { name: "#technologies", path: "/contact" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = (sectionId) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {isMenuOpen && (
        <NavMobile isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="relative top-0 z-50 mb-12 hidden items-center justify-center py-10 lg:flex">
        <nav className="fixed mx-auto max-w-screen-lg rounded-xl bg-[#2a245486] px-20 py-3 shadow-lg shadow-[#2e31556b]">
          <ul className="flex items-center gap-16">
            {/* {links.map((link, index) => {
              return (
                <li>
                  <Link
                    className="menu-item  "
                    onClick={() => {
                      handleScroll({link.name});
                      console.log(handleScroll);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })} */}
            <li>
              <Link className="menu-item" onClick={() => handleScroll("hero")}>
                home
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                onClick={() => handleScroll("experience")}
              >
                experience
              </Link>
            </li>
            <li>
              <Link
                className="menu-item"
                onClick={() => handleScroll("project")}
              >
                project
              </Link>
            </li>
            <li>
              <a
                herf={links.name}
                className="menu-item"
                // onClick={() => handleScroll("technologies")}
              >
                skill
              </a>
            </li>
            <li>
              <Link
                className="menu-item"
                onClick={() => handleScroll("contact")}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="fixed right-0 top-0 z-50 p-3">
        <button
          onClick={toggleMenu}
          className="z-50 ml-auto mr-1 mt-3 flex h-11 w-11 items-center justify-center rounded border border-sky-900/80 bg-blue-800/40 text-2xl text-sky-300 backdrop-blur-lg lg:hidden"
        >
          {isMenuOpen ? (
            <RiCloseLargeLine className="text-primary" />
          ) : (
            <RiMenu3Line className="text-primary" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
