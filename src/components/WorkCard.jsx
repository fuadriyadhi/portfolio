import React, { useState } from "react";
import { Github, LinkIcon } from "lucide-react";

export default function SkillCard({ title, image, content, link, repo, multiLink }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <div data-aos="flip-up" data-aos-mirror="true" className="card-2 flex flex-col gap-2 w-[250px] p-[20px] rounded-lg shadow-lg relative">
      <div
        className="image-container relative"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        onClick={() => setShowButton(!showButton)} // optional: toggle on click
      >
        <img src={image} alt={title} className="w-[230px] h-[230px] object-cover rounded-lg" />
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute bottom-20 left-14 px-2 py-2 rounded-full border-zinc-800 bg-transparent text-black text-[10px] font-bold transition-all duration-700 ease-in-out transform ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } hover:bg-[#273c75] hover:text-white border-2 border-transparent hover:border-[#273c75]`}
        >
          <Github />
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute bottom-20 right-14 px-2 py-2 rounded-full border-zinc-800 bg-transparent text-black text-[10px] font-bold transition-all duration-700 ease-in-out transform ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } hover:bg-[#273c75] hover:text-white border-2 border-transparent hover:border-[#273c75]`}
        >
          <LinkIcon />
        </a>
      </div>
      <h1 className="title font-bold text-[16px] capitalize">{title}</h1>
      <p className="caption text-[12px]">{content}</p>
    </div>
  );
}
