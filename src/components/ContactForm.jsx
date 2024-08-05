import React from "react";

export default function ContactForm() {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full bg-transparent py-5 text-xl font-bold text-zinc-700 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full bg-transparent py-5 text-xl font-bold text-zinc-700 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-xl font-bold">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full bg-transparent py-5 text-xl font-bold text-zinc-700 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xl font-bold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full resize-none bg-transparent py-5 text-xl font-bold text-zinc-700 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
        </div>
      </form>
    </>
  );
}
