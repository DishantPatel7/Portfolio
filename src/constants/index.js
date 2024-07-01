import p1 from "../assets/projects/p1.png";
import p2 from "../assets/projects/p2.png";
import p3 from "../assets/projects/p3.png";
import p4 from "../assets/projects/p4.png";

export const HERO_CONTENT =
  "A frontend developer who loves making websites easy to use and visually appealing. I enjoy creating interfaces that people enjoy using and find helpful.";

export const ABOUT_US =
  "I'm a passionate frontend developer with expertise in HTML, CSS, JavaScript, and React. With a Bachelor's degree in Information Technology, I've honed my skills through hands-on projects like responsive websites, interactive web applications, and a personal portfolio showcasing my design aesthetics and coding proficiency. I excel in creating seamless user experiences and leveraging modern frameworks like React to build dynamic interfaces. Passionate about learning, I stay updated with industry trends and enjoy exploring UI/UX principles. I'm eager to contribute my creativity and technical skills to dynamic teams and projects in frontend development.";

export const EDUCATION = [
  {
    id: 1,
    year: "Nov 2020 - May 2024",
    degree: "Bachelor in Engineering (GTU)",
    branch: "Information Technology",
    institute: " Gandhinagar Institute of Technology, Gandhinagar, Gujarat",
  },
  {
    id: 2,
    year: "Jun 2019 - March 2020",
    degree: "GSHSEB (Gujarat) ",
    branch: "12th science",
    institute: "Jay Somanath Higher Scondary School, Maninagar, Gujarat",
  },
  {
    id: 3,
    year: "Jun 2017 - March 2018",
    degree: "GSEB (Gujarat) ",
    branch: "10th Standard",
    institute: "J. L. Higher Scondary School, Maninagar, Gujarat",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    year: "Jan 2024 - Present",
    role: "Frontend Developer",
    company: "Skytech Pvt. Ltd.",
    description:
      "During a this internship , I focused on web development with React.js, a leading JavaScriptlibrary for building userinterfaces. Throughout the internship, I honed my skills in React.js, including proficiency in component-based architecture, state management, and routing. I gained practical experience in developing dynamic and interactive web applications.",
    technologies: ["Javascript", "React.js", "HTML5", "CSS3", "Tailwind"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Gamer's Armary | E-Commerce Website",
    img: p1,
    description:
      "Gamer’s Armary is E-commerce website for gaming related stuff like games, console, controller and related accessories etc.",
    technologies: ["ReactJS", "Javascript", "HTML5", "CSS3"],
    link1: "https://dishantpatel7.github.io/React-App-Gamers-Armary/",
    link2: "https://github.com/DishantPatel7/React-App-Gamers-Armary",
  },
  {
    id: 2,
    title: "Weather App | Fetch API",
    img: p2,
    description:
      "In this project I built a web app use Fetch API that show information of weather when you search city. It show details like Temperature, Humidity, Feels like etc.",
    technologies: ["ReactJS", "Javascript", "HTML5", "CSS3", "Fetch API"],
    link1: "https://dishantpatel7.github.io/Weather-App/",
    link2: "https://github.com/DishantPatel7/Weather-App",
  },
  {
    id: 3,
    title: "TravelO'pedia",
    img: p3,
    description:
      "In this project we built a website having motive to guide people through the most renowned places of the particular city and also providing related information.",
    technologies: ["Javascript", "HTML5", "CSS3", "Bootstrap"],
    link1: "https://dishantpatel7.github.io/TravelOpedia-website/",
    link2: "https://github.com/DishantPatel7/TravelOpedia-website",
  },
  {
    id: 4,
    title: "Agruco website",
    img: p4,
    description:
      "A Agruco website is clone of original website that i made with reasponsible website make for different size of devieces.",
    technologies: ["Javascript", "HTML5", "CSS3"],
    link1: "https://dishantpatel7.github.io/Agruco-website/",
    link2: "https://github.com/DishantPatel7/Agruco-website",
  },
];

export const CONTACT = {
  phoneNo: "+91 8511562330 ",
  email: "dishantpatel2782@gmail.com",
};

export const NAV_LINK = {
  link1: "home",
  link2: "about us",
  link3: "experience",
  link4: "project",
  link5: "contact me",
};
//not in use
export const links = [
  { name: "home", path: "home" },
  { name: "experience", path: "experience" },
  { name: "project", path: "project" },
  { name: "education", path: "education" },
  { name: "contact", path: "contact" },
  { name: "#technologies", path: "contact" },
];