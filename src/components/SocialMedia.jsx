import React from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function SocialMedia() {
  return (
    <>
      <div className="footer flex justify-between lg:min-w-[53rem]">
        <div className="flex flex-col items-center">
          <div className="font-bold">Github</div>
          <a href="https://github.com/fuadriyadhi" className="github">
            <Github />
          </a>
        </div>
        <div className="socmed flex flex-col items-center">
          <div className="font-bold">Social Media</div>
          <div className="wraper flex gap-4">
            <a href="https://www.instagram.com/fuadriyadhi7/" className="ig">
              <Instagram className="text-[900px]" />
            </a>
            <a href="https://www.linkedin.com/in/fuad-riyadhi-746302205/" className="ln">
              <Linkedin />
            </a>
            <a href="mailto:fuadriyadhi7@gmail.com" className="mail">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
