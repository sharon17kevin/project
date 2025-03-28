import CareerHeroSect from "../components/careers/CareerHeroSect";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <>
      <CareerHeroSect/>
      <div className=" bg-white bg-opacity-50 min-h-screen flex items-center justify-center z-50 font-darkerGrotesque">
        <div className=" max-w-2xl w-full mx-4 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-black">Careeers</h2>
          </div>
          <div className="text-center py-8">
            <p className="text-lg text-black">
              No open positions at this time but contact us if you believe you
              can be a solid addition to our team.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
