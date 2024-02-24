"use client"

import { motion } from "framer-motion";
import ImageLinkButton from "../Button/ImageLinkButton";

export default function Footer() {
  const NavIconEl = ({ text, imgSrc, link } : { text : string, imgSrc : string, link : string }) => {
    return (
      <div className={"flex items-center gap-2 hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1"}>
        <ImageLinkButton src={imgSrc} link={link} />
        <a href={link} className="hidden md:block">
          {text}
        </a>
      </div>
    );
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="fixed bottom-0 border-t bg-gradient-radial bg-sm backdrop-blur-sm px-4 lg:px-6 py-2.5 w-screen z-10 h-16"
    >
      <div className="flex flex-row-reverse items-center mx-auto max-w-screen-xl h-full">
        <div className="flex items-center">
          <NavIconEl text="+61 450 588 818" imgSrc="footer_icons/phone.svg" link="tel:+61450588818" />
          <NavIconEl text="leonardofan2000@gmail.com" imgSrc="footer_icons/gmail.svg" link="mailto:leonardofan2000@gmail.com" />
          <NavIconEl text="LinkedIn" imgSrc="footer_icons/linkedin.svg" link="https://www.linkedin.com/in/leonardofan/" />
          <NavIconEl text="GitHub" imgSrc="footer_icons/github.svg" link="https://github.com/leonardo-fan" />
        </div>
      </div>
    </motion.footer>
  );
}