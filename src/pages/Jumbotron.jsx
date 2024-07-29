import React from "react";
import cirle from "../assets/circle.svg";
import me from "../assets/me.png";
import figma from "../assets/figma.png";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";

export default function Jumbotron() {
  return (
    <>
      <section id="Home" className="h-[100vh] w-full">
        <div className="image absolute mx-auto">
          <img src={me} alt="foto saya" data-aos="zoom-in" data-aos-duration="5000" className="me w-[500px] z-[1]  absolute left-[500px] top-[145px]" />
          <img src={cirle} alt="bulat" className="cssanimation pushReleaseFromBottom circle w-[500px] relative left-[500px] top-[200px]" />
        </div>
        <div className="card absolute m-[170px] flex flex-col gap-4" data-aos="fade-left" data-aos-duration="5000" data-aos-delay="50">
          <div className="card-1 w-[250px] h-[100px] flex items-center rounded-md">
            <span className="cssanimation pepe text-[44px] px-[30px]">👋</span>
            <div className="">
              <p className="p-text text-[10px]">Hello, I am</p>
              <h1 className="text-[24px] font-bold">Fuad Riyadhi</h1>
            </div>
          </div>
          <div className="card-2 font-light text-[15px] w-[200px] h-[100px] flex flex-col justify-center items-end">
            <p className="p-text mx-[20px]">Front End Developer</p>
            <p className="p-text mx-[20px]">Junior Web Developer</p>
            <p className="p-text mx-[20px]">Freelancer</p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
          <div className="bulat rounded-full w-[100px] h-[100px] absolute left-[1000px] top-[150px] flex justify-center items-center">
            <img src={figma} alt="figma" className="h-[60px] w-[60px]" />
          </div>
          <div className="bulat rounded-full w-[150px] h-[150px] absolute left-[1100px] top-[300px] flex justify-center items-center">
            <img src={react} alt="react" className="h-[100px] w-[100px]" />
          </div>
          <div className="bulat rounded-full w-[100px] h-[100px] absolute left-[1050px] top-[500px] flex justify-center items-center">
            <img src={tailwind} alt="tailwind" className="h-[50px] w-[50px]" />
          </div>
        </div>
      </section>
    </>
  );
}
