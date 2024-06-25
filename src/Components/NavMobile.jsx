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
    <div className="fixed left-0 top-0 z-20 w-screen">
      <div className="flex h-screen w-3/4 flex-col bg-[#141414] p-8">
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
          className="h-10 rounded bg-primary px-6 text-sm text-black hover:bg-blue-200 hover:text-blue-500 md:block md:text-xl"
          onClick={() => {
            handleScroll("contact");
          }}
        >
          Contact Us
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
