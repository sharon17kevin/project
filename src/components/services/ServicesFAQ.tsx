import ExpandableTile from "../ExpandableTile";
import faqData from "../../data/faqData";
import { Link } from "react-router-dom";

const ServicesFAQ = () => {
  const data = [faqData[0], faqData[4], faqData[9]];
  return (
    <section id="plans" className="pt-10 bg-primary">
      <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row w-full my-10">
          {/* First Column/Row */}
          <div className="flex-1  p-4 text-white items-center justify-center">
            <h2 className="font-darkerGrotesque text-start text-xl md:text-2xl font-semibold text-black mb-1">
              Frequently Asked Questions
            </h2>
            <p className="font-ebgaramond text-sm md:text-base text-black mb-6">
              Find Answers to Common Queries About Our Services and Solutions
            </p>
            <div>
              <Link
                to="/faq"
                className="bg-gray-300 px-5 py-2 text-black border-black border-[1px]"
              >
                More
              </Link>
            </div>
          </div>
          {/* Second Column/Row */}
          <div className="flex-1 flex-col p-4  items-center justify-center space-y-4">
            {data.map((data, index) => (
              <ExpandableTile
                key={index}
                title={data.question}
                description={data.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
