import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const SOCIALS = [
  {
    icon: <FaGithub />,
    path: "https://github.com/DishantPatel7",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/dishantpatel2782/",
  },
  {
    icon: <AiFillInstagram />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];
const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {SOCIALS.map((item, index) => {
        return (
          <a key={index} href={item.path} className={iconStyle} target="_blank">
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
