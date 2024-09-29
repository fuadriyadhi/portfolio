import { React } from "react";
import Card from "./../components/Card";

export default function About() {
  return (
    <div className="about min-h-screen w-screen">
      <div className="flex flex-col justify-center items-center">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true">
          <h1 className="font-bold text-[2.5rem] pt-[80px] capitalize text-center">
            I Know that <span className="slogan"> high-quality apps </span> <br /> lead to <span className="slogan">successful business</span>
          </h1>
        </div>
        <div className="card">
          <div className="container mx-auto p-[90px]">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
