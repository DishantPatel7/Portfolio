import { motion } from "framer-motion";
import img from "../../assets/new-removebg-preview.png";


const Photo = () => {
  return (
    <div className="relative h-full w-full">
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
            transition: { delay: 0.7, duration: 0.5, ease: "easeIn" },
          }}
          className="g-slate-200 absolute flex h-[298px] w-[298px] items-center justify-center lg:h-[498px] lg:w-[498px]"
        >
          <img
            src={img}
            alt=""
            className="h-full w-full rounded-[50%] object-contain"
          />
        </motion.div>
      </motion.div>

      {/* circle */}
      <motion.svg
        className="h-[300px] w-[300px] lg:h-[506px] lg:w-[506px]"
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
