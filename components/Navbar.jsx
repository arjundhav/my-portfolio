"use client";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaHackerrank
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
    const [navigation, setNavigation] = useState(false);
    const [pageScroll, setPageScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setPageScroll(window.scrollY >= 120);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "projects",
        },
        {
            id: 3,
            link: "experience",
        },
        {
            id: 4,
            link: "contact",
        },
    ];


    return (
        <div
            className={`lg:h-20 md:h-20 sm:h-15 h-15 z-10 fixed  duration-700 ease-in-out ${pageScroll ? 'w-3/4 mt-6 lg:ml-48 md:ml-28 sm:ml-20 ml-12 rounded-full bg-black/70 backdrop-blur text-white border-4 border-indigo-800' : 'w-full bg-transparent text-white'}`}
        >
            <span
                style={{ transform: `translateX(${50 - 100}%)` }}
                className={'relative bg-yellow-400 h-1 z-20 top-0'}
            />
            <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
                <Link to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <h1 className={`text-2xl md:text-3xl sm:text-3xl lg:text-4xl cursor-pointer font-bold uppercase duration-200 ease-in-out hover:scale-105 tracking-wider cursor-pointern ${pageScroll && 'ml-7 md:ml-4'}`}>
                        balaji
                    </h1>
                </Link>

                <div>
                    <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                            <li key={id} className={`ml-10 cursor-pointer uppercase duration-200 ease-in-out hover:scale-125 active:scale-125 hover:text-blue-500 active:text-blue-500 tracking-wider ${pageScroll ? 'text-sm md:mr-3 mr-7' : 'text-lg'}`}>
                                <Link key={id}
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {!navigation && (
                        <div
                            className="md:hidden cursor-pointer mr-4"
                            onClick={() => setNavigation(true)}
                        >
                            <FaBars size={30} />
                        </div>
                    )}
                </div>
            </div>

            <div
                className={
                    navigation
                        ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
                        : ""
                }
            >
                <div
                    className={
                        navigation
                            ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
                            : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link to="home"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <h2
                                    onClick={() => setNavigation(false)}
                                    className="text-2xl md:text-3xl sm:text-3xl lg:text-4xl font-bold duration-200 uppercase ease-in-out tracking-wider cursor-pointer hover:scale-125"
                                >
                                    balaji
                                </h2>
                            </Link>
                            <div
                                onClick={() => setNavigation(false)}
                                className="p-3 cursor-pointer mr-3 hover:text-red-700 ease-in-out duration-200 hover:scale-125"
                            >
                                <FaTimes size={30} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 flex flex-col h-fit gap-20">
                        <ul className="uppercase">
                            {links.map(({ id, link }) => (
                                <Link key={id}
                                    activeClass="active"
                                    to={`${link}`}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li
                                        onClick={() => setNavigation(false)}
                                        className="py-4 text-2xl tracking-wider cursor-pointer duration-200 ease-in-out hover:scale-105"
                                    >
                                        {link}
                                    </li>
                                </Link>
                            ))}
                        </ul>

                        <div>
                            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                                <a href="https://www.linkedin.com/in/balaji-mehtre" target="_blank" className="flex hover:text-black items-center justify-center rounded-full shadow-md shadow-white hover:scale-105 duration-400 p-3 cursor-pointer">
                                    <FaLinkedin size={25} className=""/>
                                </a>
                                <a href="https://github.com/balajimehtre3" target="_blank" className="flex hover:text-black items-center justify-center rounded-full shadow-md shadow-white hover:scale-105 duration-400 p-3 cursor-pointer">
                                    <FaGithub size={25} />
                                </a>
                                <a href="https://www.hackerrank.com/balaji3mehtre" target="_blank" className="flex hover:text-black items-center justify-center rounded-full shadow-md shadow-white hover:scale-105 duration-400 p-3 cursor-pointer">
                                    <FaHackerrank size={25} />
                                </a>
                                <a href="https://leetcode.com/balajimehtre3" target="_blank" className="flex hover:text-black items-center justify-center rounded-full shadow-md shadow-white hover:scale-105 duration-400 p-3 cursor-pointer">
                                    <SiLeetcode size={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
