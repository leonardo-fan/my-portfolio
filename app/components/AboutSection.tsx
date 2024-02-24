"use client"

import { motion } from "framer-motion";
import Title from "./Text/Title"
import { child, container, subContainer } from "./basicStaggerConfig";
import Image from "next/image";

type techData = {
  imgSrc: string,
  text: string
};

const technologies : techData[] = [
  {
    imgSrc: "skills_icons/java.svg",
    text: "Java",
  },
  {
    imgSrc: "skills_icons/js.svg",
    text: "JavaScript",
  },
  {
    imgSrc: "skills_icons/ts.svg",
    text: "TypeScript",
  },
  {
    imgSrc: "skills_icons/py.svg",
    text: "Python",
  },
  {
    imgSrc: "skills_icons/cs.svg",
    text: "C#",
  },
  {
    imgSrc: "skills_icons/c.svg",
    text: "C",
  },
  {
    imgSrc: "skills_icons/mysql-sqlite.svg",
    text: "SQL",
  },
  {
    imgSrc: "skills_icons/html-css.svg",
    text: "HTML/CSS",
  },
  {
    imgSrc: "skills_icons/react.svg",
    text: "React",
  },
  {
    imgSrc: "skills_icons/dotnet.svg",
    text: ".NET",
  },
  {
    imgSrc: "skills_icons/mongodb.svg",
    text: "MongoDB",
  },
  {
    imgSrc: "skills_icons/azure.svg",
    text: "Microsoft Azure",
  },
  {
    imgSrc: "skills_icons/git.svg",
    text: "Git",
  },
  {
    imgSrc: "skills_icons/docker.svg",
    text: "Docker",
  },
];

export default function AboutSection() {
  
  return (
    <section id="about" className="flex items-center min-h-screen mb-16 w-full max-w-screen-xl border-b">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span variants={child} >
          <Title text="About Me" level={1} />
        </motion.span>
        <motion.div variants={child} >
          Hi 👋, welcome to my portfolio! I&apos;m Leonardo Fan, a full-stack software engineer
          with experience in both business and technology roles across
          the software, banking, consulting, public sector and insurance industry.
          I have a passion for programming, solving problems and creating useful
          solutions for people.
          Please have a look through the rest of the site and feel free to reach out.
          Thank you 🚀
        </motion.div>
        <motion.span variants={child} >
          <Title text="Technologies" level={2} />
        </motion.span>
        <motion.ul className="pl-5 columns-2" variants={subContainer} >
          {technologies.map((tech) => {
            return (
              <motion.li key={tech.text} className="flex items-center gap-2 pb-2" variants={child} >
                <img src={tech.imgSrc} className="h-6 sm:h-9" alt={tech.text}/>
                {tech.text}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  )
}