import { motion } from "motion/react";
import { useRef } from "react";
import Footer from "../components/Footer";
import FAQTile from "../components/services/FAQTile";
import faqData from "../data/faqData";

const Faq = () => {
  const ref = useRef(null);
  return (
    <>
      <div className="font-darkerGrotesque pt-10 px-2">
        <h1 className=" text-2xl md:text-4xl font-bold text-center text-black mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-xl text-gray-500 mb-8">
          Get answers to some of the most common questions.
        </p>
        <motion.div
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
          className="p-4 flex flex-col mb-6"
        >
          {faqData.map((item, index) => (
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
              <FAQTile
                title={item.question}
                description={item.answer}
                isFirst={index == 0}
                index={`${index}`}
                key={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

export default Faq;
