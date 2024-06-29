import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Projects/Project";
import Technologies from "./Components/Technologies/Technologies";
import Contact from "./Components/Contact/Contact";
import TopBtn from "./Components/TopBtn";
import Darkmode from "./Components/Navbar/Darkmode";
import Education from "./Components/Education/Education";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
  //     setDarkMode(true);
  //   } else {
  //     setDarkMode(false);
  //   }
  // }, []);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="overflow-x-hidden text-black antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:text-neutral-300">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>

          {/* Main content */}

          <Navbar />
          <div className="container mx-auto px-8 lg:px-32">
            {/* <Darkmode darkModeToggle={darkModeToggle} darkMode={darkMode} /> */}
            <Hero />
            <About />
            <Experience />
            <Project />
            <Technologies />
            <Education />
            <Contact />
          </div>
          <TopBtn />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
