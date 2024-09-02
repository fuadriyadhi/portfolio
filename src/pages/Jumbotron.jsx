import { React } from "react";
import cirle from "../assets/circle.svg";
import me from "../assets/me.png";
import figma from "../assets/figma.png";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";

export default function Jumbotron() {
  return (
    <>
      <section id="Homee" className="min-h-screen w-screen">
        <div className="parents flex flex-wrap min-h-screen min-w-full">
          {/* Container 1 */}
          <div className="one flex-1 min-w-[400px] flex flex-col justify-center items-end lg:pb-[13rem] sm:pb-0">
            <div className="card flex flex-col gap-4" data-aos="fade-left" data-aos-mirror="true" data-aos-duration="5000" data-aos-delay="50">
              <div className="card-1 w-full max-w-[260px] h-[100px] flex items-center rounded-md px-2.5">
                <span className="text-[44px] cssanimation pepe">👋</span>
                <div className="ml-4">
                  <p className="text-[10px]">Hello, I am</p>
                  <h1 className="text-[24px] font-bold">Fuad Riyadhi</h1>
                </div>
              </div>
              <div className="card-2 font-light text-[0.8rem] w-full max-w-[220px] h-[100px] flex flex-col justify-center items-end p-4">
                <p className="p-text mx-[20px]">Front End Developer</p>
                <p className="p-text mx-[20px]">Junior Web Developer</p>
                <p className="p-text mx-[20px]">Freelancer</p>
              </div>
            </div>
          </div>

          {/* Container 2 */}
          <div className="two flex-1  p-4 min-w-[350px] flex items-center justify-center">
            <div className="two_c relative w-full max-w-[500px] lg:top-[80px]">
              {/* Foto me dengan z-index lebih tinggi */}
              <img src={me} alt="foto saya" data-aos-mirror="true" data-aos="zoom-in" data-aos-duration="5000" className="w-full h-auto z-10 relative" />
              {/* Foto circle di bawah */}
              <img src={cirle} alt="bulat" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-mirror="true" className="absolute top-0 left-0 w-full h-auto z-0" />
            </div>
          </div>

          {/* Container 3 */}
          <div className="three flex-1  p-4 min-w-[400px] flex flex-wrap items-center justify-center">
            <div data-aos="fade-right" data-aos-mirror="true" data-aos-duration="5000" data-aos-delay="50" className="three-c w-full lg:max-w-[400px] flex flex-col gap-8">
              <div className="bulat rounded-full w-[100px] h-[100px] flex justify-center items-center left-[50%] lg:transform lg:-translate-x-1/2">
                <img src={figma} alt="figma" className="h-[60px] w-[60px]" />
              </div>
              <div className="bulat rounded-full w-[150px] h-[150px] flex justify-center items-center">
                <img src={react} alt="react" className="h-[100px] w-[100px]" />
              </div>
              <div className="bulat rounded-full w-[100px] h-[100px] flex justify-center items-center lg:transform lg:-translate-x-1/2">
                <img src={tailwind} alt="tailwind" className="h-[50px] w-[50px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
