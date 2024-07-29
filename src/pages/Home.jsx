import React from "react";
import About from "../pages/About";
import Works from "../pages/Works";
import Skill from "../pages/Skill";
import Navbar from "../components/Navbar";
import Jumbotron from "./Jumbotron";

function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* end navbar */}
      {/* jumbotron */}
      <section id="home">
        <Jumbotron />
      </section>
      {/* end jumbotron */}

      {/* about */}
      <section id="about">
        <About />
      </section>
      {/* end about */}

      {/* works */}
      <section id="works">
        <Works />
      </section>
      {/* end works */}

      {/* skill */}
      <section id="skill">
        <Skill />
      </section>
      {/* end skill */}
    </>
  );
}

export default Home;
