import React, { useState, useRef } from "react";
import { Loader, Mail } from "lucide-react";

const scriptURL = "https://script.google.com/macros/s/AKfycbwwCQ48BYZdFqNt5c4npOePqSIjp7C8jhLE-GvERCqnFPuvFdjHc9sHib5hC1BzSUvzxg/exec";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [warn, setWarn] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setWarn(true);
      return;
    }

    setWarn(false);
    setLoading(true);

    try {
      const response = await fetch(scriptURL, { method: "POST", body: formData });
      if (response.ok) {
        setAlert(true);
        form.reset();
        // Set timeout to hide the alert after 5 seconds (5000 ms)
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} name="submit-to-google-sheet" className="max-w-lg">
        <div className="flex flex-col gap-3 w-full">
          {alert && <div className="my-alert text-green-500 mt-4 items-center">Message sent successfully!</div>}
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full md:w-[500px] bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="w-full md:w-[500px] bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full md:w-[500px] bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className="w-full md:w-[500px] resize-none bg-transparent py-5 text-xl font-bold text-zinc-700 border-b-2 border-zinc-800 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-300 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
            />
          </div>
          {warn && <div className="warn text-red-500">Please fill out all fields.</div>}
        </div>
        <div className="flex gap-4 mt-10">
          <button type="submit" className="btn-kirim bg-zinc-800 text-white hover:bg-zinc-700 inline-flex items-center gap-x-2 py-1.5 px-8 rounded-md text-[14px] text-center relative overflow-hidden" disabled={loading}>
            {loading ? (
              <Loader className="h-6 w-6 animate-spin" />
            ) : (
              <>
                <Mail className="h-6 w-6" />
                <span>Send</span>
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
