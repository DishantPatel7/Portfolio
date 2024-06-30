import { Link } from "react-router-dom";
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
          <Link key={index} to={item.path} className={iconStyle} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
