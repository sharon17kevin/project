import { Link } from "react-router-dom";
import circleTextButton from "../../assets/Circle Button.png";
import { RevealAnimation } from "../RevealAnimation";
import { motion } from "motion/react";
import { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  return (
    <section id="services" className="pt-20 bg-white">
      <div className="flex justify-center flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealAnimation>
          <h2 className="font-darkerGrotesque text-center text-2xl md:text-3xl font-semibold text-black mb-1">
            The Services We Provide
          </h2>
        </RevealAnimation>
        <div className="flex justify-center w-full">
          <div className="flex align-middle w-full md:w-2/5">
            <RevealAnimation delay={0.5}>
              <h3 className="font-ebgaramond text-center text-sm md:text-base text-black mb-6">
                Explore Our Services: Connecting Businesses with the Best in
                Telecom Infrastructure.
              </h3>
            </RevealAnimation>
          </div>
        </div>
        <div className="flex justify-center w-full mt-2" ref={ref}>
          <motion.div
            className=" grid w-8/9 md:grid-cols-2 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 0.2,
                  staggerChildren: 0.2,
                  when: "beforeChildren",
                },
              },
            }}
            whileInView="visible"
            viewport={{ root: ref, once: true, amount: 0.3 }}
            initial="hidden"
          >
            {[
              {
                description: "Building Network Infrastructure",
              },
              {
                description:
                  "Maintaining and Renovation of Network Infrastructure",
              },
              {
                description: "Setting Up Solar Panels and Batteries",
              },
              {
                description: "Performing Energy Audits",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
              >
                <div key={index} className="flex">
                  <div className="flex items-center bg-primary px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <p className="font-ebgaramond ms-1 text-center text-sm md:text-base text-black">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="relative h-52 w-full mt-5">
        {/* Top Half - Color 1 */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>

        {/* Bottom Half - Color 2 */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-primary"></div>

        {/* Center Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            to={"/services"}
            className="px-6 py-3 text-white font-bold rounded-lg transition-transform transform hover:scale-110"
          >
            <img
              src={circleTextButton}
              alt="Button Icon"
              className="h-34 w-40"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
