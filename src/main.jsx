import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero/Hero.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Project from "./Components/Projects/Project.jsx";
import Education from "./Components/Education/Education.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import About from "./Components/About/About.jsx";

const router = createBrowserRouter([
  { path: "/Portfolio", element: <App /> },
  { path: "/hero", element: <Hero /> },
  { path: "/experience", element: <Experience /> },
  { path: "/project", element: <Project /> },
  { path: "/education", element: <Education /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
