"use client"
import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { TbWorldWww} from "react-icons/tb";
import { motion } from "framer-motion";

export default function Footer () {
    return(
<footer className="py-28 flex justify-center bg-[#f7f7f7] ">
    <motion.div
    initial={{opacity: 0, y:50}}
    whileInView={{opacity:1, y:0}}
    className="container">
<div className="grid grid-cols-1 md:grid-cols-2
lg:grid-cols-3 gap-14 md:gap-4">
<div className="space-y-4 max-w-[300px]">
    <h1 className="text-2xl  font-bold">The Steam School</h1>
    <p className="text-gray-500">You must devote yourselves whole-heartedly to your studies, for that is your first obigatio to yourselves,your parents and to the state.</p>
</div>
{/*second section */}
<div className="grid grid-cols-2 gap-10">
    <div className="space-y-4">
<h1 className="text-2xl font-bold">Academic Services</h1>
<div className="text-gray-500">
    <ul className="space-y-2 text-lg">
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Activity Based Learning
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Hifz & Nazraa
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Taekwondo
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            science Lab
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Library
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Multimedia Room
        </li>
    </ul>
</div>
    </div>
    <div>
    <div className="grid grid-cols-2 gap-10">
    <div className="space-y-4">
<h1 className="text-2xl font-bold">Academic Services</h1>
<div className="text-gray-500">
    <ul className="space-y-2 text-lg">
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Home
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            About
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Our Team
        </li>
        <li className="cursor-pointer hover:text-blue-700 duration-200">
            Contact Us
        </li>
        
    </ul> 
    </div>
    </div>
    </div>
    </div>
</div>
{/*thid section*/}
<div className="space-y-4 max-w-[300px]">
    <h1 className="text-2xl font-bold">
        Join Us
    </h1>
    <div className="flex items-center ">
        <input type="text" placeholder="Enter Your email" className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0
        focus:outline-none placeholder:text-gray-500" />
        <button className="bg-slate-600 text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
    </div>
    {/*social icons*/}
    <div className="flex space-x-6 py-3 ">
        <a href="https://www.facebook.com/thesteamschoolkeamari/"><FaFacebook className="cursor-pointer hover:text-blue-700 hover:scale-105 duration-200"/></a>
        <a href="#"><FaWhatsapp className="cursor-pointer hover:text-green-500 hover:scale-105 duration-200"/></a>
        <a href=""><TbWorldWww className="cursor-pointer hover:text-blue-700 hover:scale-105 duration-200"/></a>
    </div>
</div>
</div>
    </motion.div>
</footer>

    );
};