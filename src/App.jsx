import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Projects/Project";
import Technologies from "./Components/Technologies/Technologies";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        {/* <div className="container mx-auto px-20"> */}
        <div className="container mx-auto px-8 lg:px-32">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Project />
          <Technologies />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
