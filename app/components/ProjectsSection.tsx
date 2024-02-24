"use client"

import { motion } from "framer-motion";
import LinkButton from "./Button/LinkButton"
import Title from "./Text/Title"
import { child, container, subContainer } from "./basicStaggerConfig";

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex items-center min-h-screen mb-16 w-full max-w-screen-xl">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true, amount: 0.5 }}
        className="py-16"
      >
        <motion.div variants={child} >
          <Title text="Projects" level={1} />
        </motion.div>
        <motion.div id="project-1" className="flex flex-col md:flex-row items-center justify-between my-5" variants={subContainer}>
          <motion.div
            id="project-1-desc"
            className="md:pr-5 md:w-1/2"
            variants={subContainer}
          >
            <motion.div variants={child}>
              <Title text="UNSW Circles" level={2} />
            </motion.div>
            <motion.div variants={child}>
              <p>Led an agile team of 10 students, supported by Git and CI/CD pipelines, 
                to build a degree planner for UNSW. The front-end was built with React and TypeScript, 
                while the backend used Python and FastAPI. The website has around 8500 total visits per month.</p>
            </motion.div>
            <motion.div
              id="project-1-links"
              className="flex flex-row justify-start mt-2"
              variants={subContainer}
            >
              <motion.div variants={child}>
                <LinkButton text="See Live" className="m-1" link="https://circles.csesoc.app/" />
              </motion.div>
              <motion.div variants={child}>
                <LinkButton text="Source Code" className="m-1" link="https://github.com/csesoc/circles" />
              </motion.div>
            </motion.div>
          </motion.div>
          <a href="https://circles.csesoc.app/" className="w-1/2">
            <motion.img
              alt="UNSW Circles screenshot"
              className="hidden md:block rounded-lg"
              src="/circles.jpg"
              variants={child}
            />
          </a>
        </motion.div>
        <motion.div id="project-2" className="flex flex-col md:flex-row items-center justify-between my-5" variants={subContainer}>
          <a href="https://github.com/leonardo-fan/phone-number-scraper" className="w-1/2">
            <motion.img
              alt="phone number scraper screenshot"
              className="hidden md:block rounded-lg"
              src="/phone-number-scraper-demo.png"
              variants={child}
            />
          </a>
          <motion.div
            id="project-2-desc"
            className="md:pl-5 md:w-1/2"
            variants={subContainer}
          >
            <motion.div variants={child}>
              <Title text="Phone Number Web Scraper" level={2} />
            </motion.div>
            <motion.div variants={child}>
              <p>Built a Command Line Interface tool that aims to show users if their phone number 
                is publicly accessible on links available on Google. Coded using Python with Selenium
                and Beautiful Soup as part of a cybersecurity course at UNSW, achieving a High Distinction grade for the project. </p>
            </motion.div>
            <motion.div
              className="flex flex-row justify-start mt-2"
              variants={subContainer}
            >
              <motion.div variants={child}>
                <LinkButton text="Source Code" className="m-1" link="https://github.com/leonardo-fan/phone-number-scraper" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}