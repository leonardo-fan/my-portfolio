"use client"

import LinkButton from '../Button/LinkButton';
import ImageLinkButton from '../Button/ImageLinkButton';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="fixed top-0 border-b bg-gradient-radial bg-sm backdrop-blur-sm px-4 lg:px-6 py-2.5 w-screen z-10 h-16"
    >
      <nav className="flex justify-between items-center mx-auto max-w-screen-xl h-full">
        <ImageLinkButton src="./icon.png" link="./#hero" />
        <div className="flex items-center">
          <a href="/#about" className="hidden sm:block hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">About</a>
          <a href="/#experience" className="hidden sm:block hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">Experience</a>
          <a href="/#projects" className="hidden sm:block hover:text-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mx-1">Projects</a>
          <LinkButton text="Resume" className="my-1 lg:my-1.5 mx-1" link="/resume.pdf" />
        </div>
      </nav>
    </motion.header>
  );
}