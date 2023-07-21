import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-img.svg";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="mb-5 text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white/70 rounded-xl mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4 flex flex-col">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <Link
                href="https://www.linkedin.com/in/balaji-mehtre" target="_blank"
                className="flex hover:text-blue-500 items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer"
              >
                <FaLinkedin size={25} />
              </Link>
              <Link
                href="https://github.com/balajimehtre3"
                className="flex hover:text-gray-500 items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer"
              >
                <FaGithub size={25} />
              </Link>
              <Link
                href="https://www.hackerrank.com/balaji3mehtre"
                className="flex hover:text-green-500 items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer"
              >
                <FaHackerrank size={25} />
              </Link>
              <Link
                href="https://leetcode.com/balajimehtre3"
                className="flex hover:text-orange-500 items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer"
              >
                <SiLeetcode size={25} />
              </Link>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/cf455f06-3357-4011-aa7c-dd7df75cbd13"
                method="POST"
                className="w-full"
              >
                <div className="grid gap-4 w-full py-2">
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-50 dark:text-gray-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6">First Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                      <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-50 dark:text-gray-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6">Last Name</label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-50 dark:text-gray-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6">Email Address</label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-50  peer-focus:text-blue-500">Your Message</label>
                    <textarea id="message" rows="12" className="block p-2.5 w-full text-sm bg-transparent bg-gray-50 focus:ring-0 rounded-lg border-2 border-gray-300 focus:ring-blue-500  peer dark:bg-white  placeholder-gray-400  focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
