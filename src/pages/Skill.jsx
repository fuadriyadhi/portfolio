import React from "react";
import OrbitingCircle from "./../components/ui/CircleSkill";

export default function Skill() {
  return (
    <>
      <div className="about min-h-full w-full">
        <div className="flex flex-col justify-center items-center">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true">
            <h1 className="font-bold text-[2.5rem] pt-[70px] capitalize text-center">Skill & Experience</h1>
          </div>
        </div>
        <div className="container flex flex-wrap justify-center lg:gap-[80px]" data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true">
          <div className="OrbitingCircler">
            <OrbitingCircle />
          </div>
          <div className="experience flex flex-col lg:mt-16">
            <div className="exp-1">
              <p className="font-bold">2021</p>
              <h2>Full Stack Developer</h2>
              <div className="cpt text-sm w-[400px]">I have a proven track record of delivering high-quality projects and solutions that meet the needs of our clients.</div>
            </div>
            <div className="exp-2 mt-8">
              <p className="font-bold">2021</p>
              <h2>Full Stack Developer</h2>
              <div className="cpt text-sm w-[400px]">I have a proven track record of delivering high-quality projects and solutions that meet the needs of our clients.</div>
            </div>
            <div className="exp-3 mt-8 ">
              <p className="font-bold">2021</p>
              <h2>Full Stack Developer</h2>
              <div className="cpt text-sm lg:w-[400px]">I have a proven track record of delivering high-quality projects and solutions that meet the needs of our clients.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
