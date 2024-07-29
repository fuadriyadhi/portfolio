import React, { useState } from "react";
import dataSkill from "../constant/dataSkill";
import WorkCard from "./../components/WorkCard";

export default function Works() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 6;
      if (newCount >= dataSkill.length) {
        setIsExpanded(true); // Menandakan bahwa semua card telah ditampilkan
      }
      return newCount;
    });
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    setIsExpanded(false); // Menandakan bahwa tidak semua card ditampilkan
  };

  return (
    <div className="works w-full mb-10">
      <div className="flex flex-col justify-center items-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-bold text-[38px] w-[600px] pt-[70px] capitalize text-center">
            Own <span className="slogan">Portfolio</span> Section
          </h1>
        </div>
        <div className="card">
          <div className="mt-10">
            <div className="flex flex-wrap justify-center gap-10 w-[70%] mx-auto">
              {dataSkill.slice(0, visibleCount).map((item) => (
                <WorkCard key={item.id} title={item.title} content={item.content} image={item.image} link={item.link} />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            {isExpanded ? (
              <button onClick={handleShowLess} className="more font-bold text-[13px] py-1.5 px-4 rounded-lg bg-red-500 text-white">
                Show Less
              </button>
            ) : (
              visibleCount < dataSkill.length && (
                <button onClick={handleLoadMore} className="more font-bold text-[13px] py-1.5 px-4 rounded-lg bg-blue-500 text-white">
                  Load More
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
