import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SkillCard({ title, image, content, link, multiLink }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="card-2 flex flex-col gap-2 w-[250px] p-[20px] rounded-lg shadow-lg relative">
      <div
        className="image-container relative"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        onClick={() => setShowButton(!showButton)} // optional: toggle on click
      >
        <img src={image} alt={title} className="w-[230px] h-[230px] object-cover rounded-lg" />
        <Link
          to={link}
          className={`absolute bottom-2 left-14 px-4 py-2 rounded-md border-[#273c75] bg-transparent text-white text-[10px] font-bold transition-all duration-700 ease-in-out transform ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } hover:bg-[#273c75] hover:text-white border-2 border-transparent hover:border-[#273c75]`}
        >
          Lihat Portfolio
        </Link>
      </div>
      <h1 className="title font-bold text-[16px] capitalize">{title}</h1>
      <p className="caption text-[12px]">{content}</p>
    </div>
  );
}
