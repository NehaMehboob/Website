"use client"
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { GiHighKick } from "react-icons/gi";
import { IoMdBeaker } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { motion } from "framer-motion";


const ServiceData = [
    {
        id:1,
        title: "Hifz & Nazra",
        link: "#",
        delay: 0.2,
        icon: <FaBookOpenReader />
    },
    {
        id:2,
        title:"Computer lab",
        link: "#",
        delay: 0.3,
        icon: <RiComputerLine />
    },
    {
        id:3,
        title: "Science Lab",
        link: "#",
        delay: 0.4,
        icon: <IoMdBeaker />
    },
    {
        id:4,
        title: "Taekwondo",
        link: "#",
        delay: 0.5,
        icon: <GiHighKick />
    },
    {
        id:5,
        title: "24/7 support",
        link: "#",
        delay: 0.6,
        icon: <BiSupport />
    }
];
const slideLeft = (delay: number) => {
return {
    initial:{
        opacity: 0,
        x: 50,
       },
       animate:{
        opacity: 1,
        x: 0,
        transition:{
            duration: 0.3,
            dealy: delay,
            ease: "easeInOut",
        }
       }
}
}

export default function Service  ()  {


    return(
        <section className="bg-white">
            <div className="container pb-14 pt-16">
                <h1 className="text-4xl font-bold text-left pb-10">Services We Provide</h1>
                 </div>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                 {ServiceData.map((Service)=> (
                    <div>
                {Service.icon}
                        
                        <motion.div
                        variants={slideLeft(Service.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{once:true}}
                        className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
                        <div className="text-4xl mb-4">{Service.icon}</div>
                        <h1 className="text-lg font-semibold text-center px-3">{Service.title}</h1>
                    </motion.div>
                    </div>

                    ))};
                  
                 </div>
        </section>




    )
};