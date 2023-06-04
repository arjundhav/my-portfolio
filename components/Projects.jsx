import React from "react";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Portfolio",
      discription: "This is Made by using Next.js and Tailwind css.",
      live:"",
      github: "https://github.com/balajimehtre3/Next-JS",
    },
    {
      id: 2,
      title: "School Management System",
      discription: "School Management System is a web-based application built using React.js, Material UI, Spring Boot, MySQL and GitHub. The project aims to provide a comprehensive solution for school administration, including student registration and teacher registration.",
      live: "https://schoolmanagementsystemrj.netlify.app",
      github: "https://github.com/balajimehtre3/SchoolManagementSystemWithReactAndSpringBoot",
    },
    {
      id: 3,
      title: "React with dummy API",
      discription: "React with dummy API is a simple web application built using React and Material UI. The project aims to showcase the implementation of React with a dummy API. The application fetches data from the API and displays it in a simple and clean user interface.",
      live: "https://useralldetails.netlify.app",
      github: "https://github.com/balajimehtre3/reactwithdummyapi",
    },
    {
      id: 4,
      title: "CRUD in React",
      discription: "CRUD in React is a simple web application built using React and local storage. The project aims to showcase the implementation of basic CRUD functionalities using React. The application allows users to create, read, update, and delete data entries in a simple user interface. The project uses local storage to store the data entries.",
      live: 'https://formcrud1.netlify.app',
      github: "https://github.com/balajimehtre3/FormCRUD",
    },
    {
      id: 5,
      title: "LearnWithUs",
      discription: "LearnWithUs is an e-learning platform built using HTML5, CSS3, JavaScript, Java, Servlet, JSP, Hibernate Framework, MySQL, Bootstrap Framework, Tailwind CSS, and GitHub. The project aims to provide a comprehensive platform for users to learn new skills and get notes.",
      live:"https://github.com/balajimehtre3/LearnWithUs",
      github: "https://github.com/balajimehtre3/LearnWithUs",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 lg:pt-16 md:pt-5 sm:pt-5 pt-12 text-center md:text-left">
        <h2 className="mb-5 text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          projects
        </h2>
        <div className="max-w-5xl mx-auto grid gap-8">
          {portfolios.map(({ id, title, discription, live, github}) => (
            <div className="max-w-full p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-700 dark:border-gray-700">
              <Link key={id} href={live}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{discription}</p>
              <Link key={id} href={live} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Live
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
              <Link key={id} href={github} className="inline-flex items-center ml-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Source Code
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="https://github.com/balajimehtre3">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer
            transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
