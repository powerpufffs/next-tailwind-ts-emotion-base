import * as React from "react";
import { motion } from "framer-motion";

interface hoverableProps {}

const Hoverable: React.FC<hoverableProps> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.005,
        shadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px;`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hoverable;
