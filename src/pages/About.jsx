import { React, useEffect } from "react";
import Card from "./../components/Card";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animasi akan berjalan saat scroll ke atas dan ke bawah
    });
  }, []);

  return (
    <div className="about min-h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-bold text-[2.5rem] pt-[70px] capitalize text-center">
            I Know that <span className="slogan"> high-quality apps </span> <br /> lead to <span className="slogan">successful business</span>
          </h1>
        </div>
        <div className="card">
          <div className="container mx-auto p-[80px]">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
