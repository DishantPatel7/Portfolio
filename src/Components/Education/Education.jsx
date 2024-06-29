import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }} className="div-css" id="education">
      <h2 className="h2-heading">Education</h2>
      <div className="">
        
      </div>
    </motion.div>
  );
};

export default Education;
