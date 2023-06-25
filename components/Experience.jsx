import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import java from "../public/assets/experience/java.png";
import sb from "../public/assets/experience/springboot.png";
import rp from "../public/assets/experience/rp.png";
import h from "../public/assets/experience/h.png";
import ms from "../public/assets/experience/ms.png";
import b from "../public/assets/experience/b.png";
import tailwind from "../public/assets/experience/tailwind.png";
import gitHub from "../public/assets/experience/github.png";
import mongo from "../public/assets/experience/mongo.jpeg";

import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "React",
      src: reactImage,
    },
    {
      id: 2,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 3,
      title: "HTML",
      src: html,
    },
    {
      id: 4,
      title: "CSS",
      src: css,
    },
    {
      id: 5,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 6,
      title: "Java",
      src: java,
    },
    {
      id: 7,
      title: "Spring Boot",
      src: sb,
    },
    {
      id: 8,
      title: "Rest API",
      src: rp,
    },
    {
      id: 9,
      title: "Hibernate",
      src: h,
    },
    {
      id: 10,
      title: "MySQL",
      src: ms,
    },
    {
      id: 11,
      title: "Tailwind CSS",
      src: tailwind,
    },
    {
      id: 12,
      title: "Bootstrap",
      src: b,
    },
    {
      id: 13,
      title: "Github",
      src: gitHub,
    },
    {
      id: 14,
      title: "Mongo DB",
      src: mongo,
    }
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="mb-5 text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          experience
        </h2>
        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width={64} height={64} alt={title} />
              <h3 className="font-light text-white">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
