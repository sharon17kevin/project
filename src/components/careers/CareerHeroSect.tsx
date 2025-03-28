import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/guysConstruct.webp";
import { RevealAnimation } from "../RevealAnimation";

const CareerHeroSect = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2], {
    clamp: false,
  });

  return (
    <div className="w-full pt-6">
      <div
        ref={containerRef}
        className="relative max-w-[90vw] max-h-screen rounded-3xl overflow-hidden mx-20"
      >
        <motion.div
          style={{ scale }}
          transition={{ ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={heroImage}
            alt="Responsive Image"
            className="w-full mx-auto"
          />
        </motion.div>
        <div className="absolute bottom-10 left-10 flex flex-col font-darkerGrotesque text-4xl font-semibold text-white">
          <p>
            <RevealAnimation>
              {["Check out our job openings"]}
            </RevealAnimation>
          </p>
          <div className="p-[4px] w-fit bg-gradient-to-r from-customGradient-light via-customGradient to-customGradient-dark rounded-full">
            <Link
              to="/services"
              className="bg-white flex pt-2 pb-3 px-5 rounded-full w-fit font-darkerGrotesque text-black text-base font-semibold"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSect;
