import Image from "next/image";
import React from "react";
import { IoMdMenu } from "react-icons/io";



function Header() {
    return(
        <header className="  flex justify-between items-center gap-3 font-serif text-blue-800" >
            
            <div>
            <h1 > <Image src="./school.jpg" alt="header" height={50} width={150}/></h1>
            <h2 className="font-bold text-2xl">The Steam School</h2>
     </div>
     
             <nav>
<ul className="hidden lg:block">
    <li className="inline-block py-2 px-3 hover:text-blue-700 cursor-pointer"> Home </li>
    <li  className=" inline-block py-2 px-3 hover:text-blue-700 cursor-pointer">About</li>
    <li className=" inline-block py-2 px-3 hover:text-blue-700 cursor-pointer">Our Team</li>
    <li  className="inline-block py-2 px-3 hover:text-blue-700 cursor-pointer">Contact</li>
</ul>
<button className= "bg-blue-800 text-white font-semibold inline-block px-6 py-2 rounded-lg duration-200  hover:bg-blue-600">Sign In</button>
         <div className="lg:hidden">
            <IoMdMenu className="text-4xl"></IoMdMenu>

         </div>
            </nav>
            </header>

);
};
export default Header