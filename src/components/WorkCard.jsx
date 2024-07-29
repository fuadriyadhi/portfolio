import React from "react";
import { Link } from "react-router-dom";

export default function SkillCard({ title, image, content, link, multiLink }) {
  return (
    <>
      <div className="">
        <div className="card-2 flex flex-col gap-2 w-[250px] p-[20px] rounded-lg shadow-lg">
          <img src={image} alt={title} className="w-[230px] h-[230px] object-cover rounded-lg" />
          <h1 className="title font-bold text-[16px] capitalize">{title}</h1>
          <p className="caption text-[12px]">{content}</p>

          {link && (
            <Link to={link} className="h-10 bg-orange-400 rounded-full w-[180px] flex justify-center items-center mx-auto">
              Lihat Portfolio
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
