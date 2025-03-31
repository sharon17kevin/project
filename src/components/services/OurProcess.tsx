import process from "../../assets/process.webp";

const OurProcess = () => {
  return (
    <section id="services" className="pt-20 bg-white py-10">
      <div className="items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-darkerGrotesque text-center text-2xl md:text-3xl font-semibold text-black mb-1">
          Our Process
        </h2>
        <div className="flex justify-center w-full">
          <div className="flex align-middle w-full md:w-3/5">
            <h3 className="font-ebgaramond text-center text-base md:text-xl text-black mb-6">
              Our structured approach ensures efficiency from start to finish.
              We begin with in-depth requirement analysis and feasibility
              studies, followed by precision-driven design and blueprinting. Our
              swift installation and rigorous testing guarantee seamless
              performance, with ongoing routine maintenance for long-term
              reliability.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-1 mx-auto max-w-7xl px-10 h-72 pr-10  items-center justify-center lg:h-96">
        <div className="m-auto w-full h-full">
          <img
            src={process}
            alt="Polygon Shape"
            className="w-full h-full object-contain clip-polygon"
          />
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
