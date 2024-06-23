import { motion } from "framer-motion";
import img from "../assets/new-removebg-preview.png";
import img2 from "../assets/112.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: .7, duration: 0.5, ease: "easeIn" },
          }}
          className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] flex justify-center items-center g-slate-200 mix-blend-lighten absolute"
        >
          <img src={img} alt="" className="rounded-[50%] w-full h-full object-contain" />
        </motion.div>
      </motion.div>

      {/* circle */}
      <motion.svg
        className="w-[300px] lg:w-[506px] h-[300px] lg:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25 ", "16 25 92 72", "4 250 22 22 "],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
