import ExpandableTile from "../ExpandableTile";

const ServicesFAQ = () => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div>
              <button className="bg-gray-300 px-5 py-2 text-black border-black border-[1px]">
                More
              </button>
            </div>
          </div>
          {/* Second Column/Row */}
          <div className="flex-1 flex-col p-4  items-center justify-center space-y-4">
            <ExpandableTile title="vvkffk" description="vkdkvdv"/>
            <ExpandableTile title="vvkffk" description="vkdkvdv"/>
            <ExpandableTile title="vvkffk" description="vkdkvdv"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
