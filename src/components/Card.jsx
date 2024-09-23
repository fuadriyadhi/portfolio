import React from "react";
import fe from "../assets/fe.png";
import ui from "../assets/ui.gif";
import be from "../assets/be.png";

function Card() {
  const cards = [
    { image: fe, title: "Frontend", caption: "I can make website interactive with awesome animation" },
    { image: ui, title: "UI/UX Designer", caption: "I can make beautiful design with figma or other. from material design guidelines" },
    { image: be, title: "Backend", caption: "I am a backend developer with javascript programming language recently" },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center gap-12 space-x-4">
        {cards.map((card, index) => (
          <div key={index} className="max-w-sm" data-aos="fade-up" data-aos-mirror="true" data-aos-duration="1000" data-aos-offset="100">
            <div className="transform transition-transform duration-500 hover:scale-105">
              <img className="w-[200px] rounded-md" src={card.image} alt={card.caption} />
              <div className="py-4">
                <h3 className="title font-bold text-[16px]">{card.title}</h3>
                <p className="caption text-[0.8rem] w-[220px]">{card.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
