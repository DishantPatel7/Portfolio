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
      <motion.div
      // initial={{ opacity: 0, x: -100 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1.5, delay: .5}}
      >
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-300">{edu.year}</p>
            </motion.div>
            <div className="w-full lg:w-3/4 lg:max-w-sm">
              <h5 className="text-base tracking-tight">{edu.degree}</h5>
              <h4 className="text-2xl font-semibold leading-loose text-primary">
                {edu.branch}
              </h4>
              <p className="pt-1 text-sm">{edu.institute}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Education;
