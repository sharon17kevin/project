import { motion, useInView } from 'motion/react';
import React, { useRef } from 'react';


interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const RevealAnimation: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content",
  delay = 0 
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
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
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