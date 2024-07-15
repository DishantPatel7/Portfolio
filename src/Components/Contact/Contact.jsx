import React from "react";
import { CONTACT } from "../../constants";
import { FaPhone } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="div-css border-none pb-3" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="h2-heading"
      >
        Get in Touch
      </motion.h2>
      <div className="-mt-7 mb-10 text-center tracking-tight">
        <motion.a href={`tel:${CONTACT.phoneNo}`}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="my-4 flex items-center justify-center"
        >
          <FaPhone className="mr-2 text-primary" />
          {CONTACT.phoneNo}
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          href="mailto: dishantpatel2782@gmail.com"
          className="flex items-center justify-center"
        >
          <IoMailOpenSharp className="mr-2 text-red-500" />
          <p className="border-b border-neutral-600">{CONTACT.email}</p>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
