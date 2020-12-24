/** @jsxImportSource @emotion/react */
import * as React from "react";
import { motion } from "framer-motion";

interface hoverableProps {}

const Hoverable: React.FC<hoverableProps> = ({ children, ...props }) => {
  return (
    <motion.div
      initial={{ boxShadow: "0 0px 0px rgba(0, 0, 0, 0.2)" }}
      whileHover={{
        y: -5,
        scale: 1.005,
        boxShadow: `0 10px 15px rgba(0, 0, 0, 0.2)`,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Hoverable;
