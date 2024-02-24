import { Variants, motion } from "framer-motion";
import { useRef } from "react";
import RandomAnimToChar from "./RandomAnimToChar";

type AnimatedTextProps = {
  text: string | string[];
  className?: string;
  charAniTime: number;
  variants?: Variants;
  delay?: number;
};

export default function ShowByCharacterText ({
  text,
  className,
  charAniTime,
  variants,
  delay,
}: AnimatedTextProps) {
  const textArray = Array.isArray(text) ? text : [text];
  const delayFr = delay ? delay : 0;
  const ref = useRef(null);
  const animation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delayFr,
        duration: charAniTime,
      },
    },
  };

  return (
    <motion.span variants={variants} className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: charAniTime } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    <RandomAnimToChar
                      className={className}
                      endChar={char}
                      duration={charAniTime}
                      // could make into func NB: doesn't take line into account
                      delay={(delayFr + ((line.split(" ").slice(0, wordIndex).map(s => s.length).reduce((a, c) => a + c, 0) * wordIndex) + charIndex) * charAniTime)}
                    />
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </motion.span>
  );
}