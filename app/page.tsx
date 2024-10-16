
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Service from "./component/service";
import Footer from "./component/footer";

export default function Home() {
  return (
    
  <main>
  <section className="" >
    <nav>
      <div className= "container grid grid-cols-1 md:grid-cols-2 min-h-[650px"></div>
    </nav>
    <div  >
<h1 className="flex justify-center font-serif text-3xl bg-blue-900 text-white">Think,Create & Lead</h1>
</div>
<div className=" flex-col justify-center py-20 px-20 container grid grid-cols-1 md:grid-cols-2 min-h-[650px">
<h2 className=" font-serif text-3xl lg:text-5xl !leading-snug">Rising The <span className="text-blue-800 ">Children</span>  With Deen & Dunya</h2>
</div>
<div className="flex justify-center md:justify-start">
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900 flex items-center gap-2 group">Get Started <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 grup-hover:-rotate-45 duration-300"/></button>
</div>
<div className="flex justify-end py-32">
  <img  src= "./logo.jpg" alt="Hero" className=" px-11 -mt-72 flex justify-center"></img>
</div>
</section>
<Service />
<Footer />
  </main>
  );
}