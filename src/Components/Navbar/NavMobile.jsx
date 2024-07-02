import React from "react";
import { NAV_LINK } from "../../constants";

const NavMobile = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) {
      setIsMenuOpen(false);
    }
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed left-0 top-0 z-20 w-screen">
      <div className="flex h-screen w-3/4 flex-col bg-[#141414] p-8">
        <div className="ui-circle -ml-20 -mt-10" />

        <ul>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              {NAV_LINK.link1}
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("about")}>
              {NAV_LINK.link2}
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("experience")}>
              {NAV_LINK.link3}
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("project")}>
              {NAV_LINK.link4}
            </a>
          </li>
          {/* {links.map((link, index) => {
            return (
              <li key={index} className="mb-5">
                <a
                  className="menu-item  "
                  onClick={() => handleScroll(`${link.path}`)}
                >
                  {link.name}
                </a>
              </li>
            );
          })} */}
        </ul>

        <button
          className="h-10 rounded bg-primary px-6 text-base capitalize text-black hover:bg-zinc-700 hover:text-white md:block md:text-lg"
          onClick={() => {
            handleScroll("contact");
          }}
        >
          {NAV_LINK.link5}
        </button>
      </div>
      <div
        onClick={() => setIsMenuOpen(false)}
        className="fixed top-0 -z-10 h-screen w-screen"
      />
    </div>
  );
};

export default NavMobile;
