"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ProgressCircle({ scrollableEl } : { scrollableEl : React.RefObject<HTMLElement> }) {
  const { scrollYProgress } = useScroll({ container: scrollableEl });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <circle 
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        strokeWidth="10%"
        className="stroke-white fill-none opacity-30" />
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="1"
        strokeWidth="10%"
        className="stroke-white fill-none"
        style={{ pathLength, rotate: "-90" }}
      />
    </svg>
  );
}
