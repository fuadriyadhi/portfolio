import React from "react";
import { useState, useRef } from "react";
import { Loader, Mail } from "lucide-react";

export default function ContactForm() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };
  return (
    <>
      <form action="" className="max-w-lg">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full md:w-[500px] bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full md:w-[500px] bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full md:w-[500px] bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full md:w-[500px] resize-none bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-10">
          <button
            type="submit"
            className="bg-zinc-800 text-white hover:bg-zinc-700 inline-flex items-center gap-x-2 py-1.5 px-8 rounded-md text-[14px] text-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={buttonRef}
          >
            <Mail
              className="h-6 w-6 transition-transform duration-200"
              style={{
                transform: `translate(${pos.x * 0.2}px, ${pos.y * 0.2}px)`,
              }}
            />
            <span
              className="transition-transform duration-200"
              style={{
                transform: `translate(${pos.x * 0.2}px, ${pos.y * 0.2}px)`,
              }}
            >
              Send
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
