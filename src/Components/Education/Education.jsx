import { motion } from "framer-motion";
import { EDUCATION } from "../../constants";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="div-css"
      id="education"
    >
      <h2 className="h2-heading">Education</h2>
      {EDUCATION.map((edu) => (
        <div key={edu.id} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-300">{edu.year}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/4"
          >
            <motion.h5
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1 }}
              className="text-base tracking-tight"
            >
              {edu.degree}
            </motion.h5>
            <motion.h4
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
              className="text-2xl font-semibold leading-loose text-primary"
            >
              {edu.branch}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6 }}
              className="pt-1 text-sm"
            >
              {edu.institute}
            </motion.p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Education;
