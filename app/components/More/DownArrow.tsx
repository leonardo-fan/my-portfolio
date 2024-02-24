import { motion } from "framer-motion";

export default function DownArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <motion.polygon
        stroke="#FFFFFF"
        fill="#FFFFFF"
        points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"
        animate={{ y: [-2.5, 2.5, -2.5] }}
        transition={{ repeat: Infinity}}
      />
    </svg>
  );
}
