import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type RandomAnimToCharProps = {
    endChar : string,
    className : string | undefined,
    delay : number,
    duration : number,
};

export default function RandomAnimToChar({ endChar, className, delay, duration } : RandomAnimToCharProps) {
  const [isClient, setIsClient] = useState(false);

  const count = useMotionValue(0);
  // 65536 single characters starting from 0 in UTF-16 
  const baseValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randChars = baseValues.map(_ => String.fromCharCode(Math.floor(Math.random() * (7423 - 33)) + 33));
  randChars[10] = endChar;
  const displayChars = useTransform(count, baseValues, randChars);

  useEffect(() => {
    setIsClient(true);
    const controls = animate(count, 9, { delay: delay, duration: duration });
    return controls.stop;
  }, [count, delay, duration]);

  return isClient ? (<motion.span className={className} >{displayChars}</motion.span>) : (<></>);
}