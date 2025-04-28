import React from "react";
import OrbitingCircle from "./../components/ui/CircleSkill";

export default function Skill() {
  return (
    <>
      <div className="about min-h-full w-full lg:h-screen">
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
              <p className="font-bold">2021-2023</p>
              <h2>JVALLEY INDONESIA</h2>
              <div className="cpt text-sm w-[400px]">JValley is a programming learning community aimed at beginners as well as those who have already started learning programming. I serve as a member of JValley. </div>
            </div>
            <div className="exp-2 mt-8">
              <p className="font-bold">DEC 2022 - MAR 2023</p>
              <h2>PT. SABANG DIGITAL INDONESIA</h2>
              <div className="cpt text-sm w-[400px]">
                During my internship, I was involved in the development of an presensi website, where I was responsible for designing and developing the system to ensure efficient backend operations.
              </div>
            </div>
            <div className="exp-3 mt-8">
              <p className="font-bold">NOV 2024 - FEB 2025</p>
              <h2>GAO Tek Inc.</h2>
              <div className="cpt text-sm w-[400px]">
                During my internship, I worked as a UI/UX Designer. I was responsible for creating designs for both mobile and website platforms. My tasks included developing attractive and functional user interfaces.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
