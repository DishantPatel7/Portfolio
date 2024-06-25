import React from "react";
import { CONTACT } from "../constants";
import { FaPhone } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="contact">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tight">
        <p className="my-4 flex items-center justify-center">
          <FaPhone className="mr-2 text-green-400" />
          {CONTACT.phoneNo}
        </p>
        <a
          href="mailto: dishantpatel2782@gmail.com"
          className="flex items-center justify-center"
        >
          <IoMailOpenSharp className="mr-2 text-red-500" />
          <div className="border-b">{CONTACT.email}</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
