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
              <div className="cpt text-sm w-[400px]">JValley adalah komunitas belajar pemrograman yang ditujukan untuk pemula maupun mereka yang sudah mulai mempelajari pemrograman. Saya berperan sebagai anggota di JValley. </div>
            </div>
            <div className="exp-2 mt-8">
              <p className="font-bold">2022 - 2023</p>
              <h2>PT. SABANG DIGITAL INDONESIA</h2>
              <div className="cpt text-sm w-[400px]">
                Selama kegiatan Praktik Kerja lapangan saya memiliki peran dalam proses pembuatan website presensi, bertanggung jawab untuk merancang dalam pengembangan sistem yang mendukung operasional efisien di sisi backend.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
