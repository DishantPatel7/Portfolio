import React from "react";

const links = [
  { name: "home", path: "/home" },
  { name: "experience", path: "/experience" },
  { name: "project", path: "/project" },
  { name: "education", path: "/education" },
  { name: "contact", path: "/contact" },
];
const NavMobile = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) {
      setIsMenuOpen(false);
    }
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen fixed top-0 left-0 z-20">
      <div className="w-3/4 h-screen flex flex-col p-8 bg-[#141414]">
        <div className="ui-circle -ml-20 -mt-10" />

        <ul>
          <li className="mb-5">
            <a
              className="menu-item capitalize"
              onClick={() => handleScroll("hero")}
            >
              Home
            </a>
          </li>
          <li className="mb-5">
            <a
              className="menu-item capitalize"
              onClick={() => handleScroll("experience")}
            >
              experience
            </a>
          </li>
          <li className="mb-5">
            <a
              className="menu-item capitalize"
              onClick={() => handleScroll("project")}
            >
              project
            </a>
          </li>
          <li className="mb-5">
            <a
              className="menu-item capitalize"
              onClick={() => handleScroll("education")}
            >
              education
            </a>
          </li>
          <li className="mb-5">
            <a
              className="menu-item capitalize"
              onClick={() => handleScroll("contact")}
            >
              contact
            </a>
          </li>
          {/* {links.map((link, index) => {
            return (
              <li key={index} className="mb-5">
                <a
                  className="menu-item capitalize"
                  onClick={() => handleScroll(`${link.path}`)}
                >
                  {link.name}
                </a>
              </li>
            );
          })} */}
        </ul>

        <button
          className="h-10 bg-primary text-black text-sm md:text-xl px-6 rounded hover:bg-blue-200 hover:text-blue-500 md:block"
          onClick={() => {
            handleScroll("contact");
          }}
        >
          Contact Us
        </button>
      </div>
      <div
        onClick={() => setIsMenuOpen(false)}
        className="w-screen h-screen fixed top-0 -z-10"
      />
    </div>
  );
};

export default NavMobile;
