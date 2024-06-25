import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaYoutube />,
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
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-base text-primary duration-500 hover:bg-primary hover:text-black hover:transition-all"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
