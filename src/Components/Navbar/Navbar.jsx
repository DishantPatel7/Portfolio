import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
import NavMobile from "./NavMobile";
import { NAV_LINK } from "../../constants";

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
      {/* mobile navbar  */}

      {isMenuOpen && (
        <NavMobile isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      {/* desktop navbar  */}

      <div className="fixed top-0 z-50 hidden w-full items-center justify-center py-5 lg:flex">
        <nav className="mx-auto max-w-screen-lg rounded-xl bg-[#2a245486] px-20 py-3 shadow-lg shadow-[#2e31556b]">
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
              <a className="menu-item" onClick={() => handleScroll("home")}>
                {NAV_LINK.link1}
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleScroll("about")}>
                {NAV_LINK.link2}
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                onClick={() => handleScroll("experience")}
              >
                {NAV_LINK.link3}
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleScroll("project")}>
                {NAV_LINK.link4}
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleScroll("contact")}>
                {NAV_LINK.link5}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* mobile navbar toggle button */}

      <div className="fixed right-0 top-0 z-50 p-3">
        <button
          onClick={toggleMenu}
          className="z-50 ml-auto mr-1 mt-3 flex h-11 w-11 items-center justify-center rounded border border-secondary bg-blue-800/40 text-2xl backdrop-blur-lg lg:hidden"
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
