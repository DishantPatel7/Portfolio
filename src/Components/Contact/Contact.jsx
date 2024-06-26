import React from "react";
import { CONTACT } from "../../constants";
import { FaPhone } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="div-css" id="contact">
      <h2 className="h2-heading">Get in Touch</h2>
      <div className="-mt-7 mb-10 text-center tracking-tight">
        <p className="my-4 flex items-center justify-center">
          <FaPhone className="mr-2 text-primary" />
          {CONTACT.phoneNo}
        </p>
        <a
          href="mailto: dishantpatel2782@gmail.com"
          className="flex items-center justify-center"
        >
          <IoMailOpenSharp className="mr-2 text-red-500" />
          <div className="border-b border-neutral-600">{CONTACT.email}</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
