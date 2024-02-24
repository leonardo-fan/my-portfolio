"use client"

import DownArrow from "./More/DownArrow";
import { motion } from "framer-motion";
import ShowByCharacterText from "./Text/ShowByCharacterText";
import { useState } from "react";

const TITLE_SEQ_STAG = 3;
const TITLE_SEQ_DUR = 3;

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: TITLE_SEQ_STAG * 3,
    },
  },
};

const titleChild = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: TITLE_SEQ_STAG,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const scrollChild = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function HeroSection() {
  const [blinkShown, setBlinkShown] = useState(true);

  return (
    <section id="hero" className="flex flex-col justify-center min-h-screen mb-16 w-full max-w-screen-xl">
      <motion.div
        animate="visible"
        initial="hidden"
        variants={animation}
        viewport={{ once: true, amount: 0.8 }}
        >
        <motion.div variants={titleChild}>
          {blinkShown && <motion.span
            variants={child}
            transition= {{
              repeat: 5,
              repeatType: "reverse",
              duration: 0.5,
            }}
            onAnimationComplete={() => { setBlinkShown(false); }}
            className="font-bold text-6xl md:text-7xl"
          >
            |
          </motion.span>}
          <ShowByCharacterText delay={TITLE_SEQ_STAG} variants={child} charAniTime={(TITLE_SEQ_DUR / 11)} className="font-bold text-6xl md:text-7xl" text="Leonardo Fan" />
          <ShowByCharacterText delay={TITLE_SEQ_STAG * 2} variants={child} charAniTime={(TITLE_SEQ_DUR / 16)} className="text-5xl md:text-6xl" text="Software Engineer" />
        </motion.div>
        <motion.div
          variants={scrollChild}
          className="mt-20 flex gap-2 items-center"
        >
          <DownArrow />
          <div className="text-lg">Scroll for more...</div>
        </motion.div>
      </motion.div>
    </section>
  )
}