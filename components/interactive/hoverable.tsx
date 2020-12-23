import * as React from "react";
import { motion } from "framer-motion";

interface hoverableProps {}

const Hoverable: React.FC<hoverableProps> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.005,
        boxShadow: `10px 10px 0 rgba(0, 0, 0, 0.2)`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hoverable;
