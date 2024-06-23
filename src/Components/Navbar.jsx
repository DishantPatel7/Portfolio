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

      <div className="mb-12 hidden lg:flex items-center justify-center py-10 top-0 -z-100">
        <nav className="fixed max-w-screen-lg bg-[#2a245486] rounded-xl shadow-lg shadow-[#2e31556b] mx-auto py-3 px-20 ">
          <ul className="flex items-center gap-16">
            {/* {links.map((link, index) => {
              return (
                <li>
                  <Link
                    className="menu-item capitalize"
                    onClick={() => {
                      handleScroll(`"${link.path}"`);
                      console.log(handleScroll);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })} */}
            <li>
              <Link
                className="menu-item capitalize"
                onClick={() => handleScroll("home")}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                className="menu-item capitalize"
                onClick={() => handleScroll("experience")}
              >
                experience
              </Link>
            </li>
            <li>
              <Link
                className="menu-item capitalize"
                onClick={() => handleScroll("project")}
              >
                project
              </Link>
            </li>
            <li>
              <Link
                className="menu-item capitalize"
                onClick={() => handleScroll("education")}
              >
                education
              </Link>
            </li>
            <li>
              <Link
                className="menu-item capitalize"
                onClick={() => handleScroll("contact")}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          onClick={toggleMenu}
          className="w-11 h-11 text-2xl mt-3 mr-1 text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex justify-center items-center rounded lg:hidden z-50 ml-auto"
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
