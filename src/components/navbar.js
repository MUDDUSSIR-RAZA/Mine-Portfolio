import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { BsSunFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import logoSrc from '../../public/MINE_LOGO1.png';
import Image from "next/image";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const { theme, setTheme } = useTheme("dark");
    const darkMode = theme === 'dark';

    const toggleTheme = () => {
        setTheme(darkMode ? 'light' : 'dark');
    };

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className="flex justify-between z-50 items-center w-full h-20 px-4 bg-light-matte text-black dark:shadow-lg dark:shadow-[#2A0E61]/50 dark:bg-[#03001417] dark:backdrop-blur-md dark:text-light-matte fixed nav">
            <div>
                <h1 className="text-5xl font-signature">
                    <a
                        className="link-underline link-underline-black"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                     <Image src={logoSrc} alt="Logo" width={60} height={20} />
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-8 cursor-pointer capitalize font-medium text-gray-500 dark:text-white hover:scale-105 hover:text-white duration-200 link-underline"
                    >
                        <Link href={link}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex items-center">
                <div
                    className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1 mr-4"
                    onClick={toggleTheme}
                >
                    <FaMoon className="text-white" size={18} />
                    <div
                        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                        style={darkMode ? { left: "2px" } : { right: "2px" }}
                    ></div>
                    <BsSunFill className="ml-auto text-yellow-400" size={18} />
                </div>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-10 text-gray-500 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-slate-600 text-gray-900  dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl dark"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
