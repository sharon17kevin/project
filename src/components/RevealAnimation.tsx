import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';


interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  x_hidden?: number;
  y_hidden?: number;
}

export const RevealAnimation: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content",
  delay = 0,
  x_hidden = 0,
  y_hidden = 75
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px"
  });

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y_hidden, x: x_hidden},
          visible: { opacity: 1, y: 0, x: 0 }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.5,
          delay: delay,
          ease: [0.17, 0.55, 0.55, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};