import landing from "../../assets/home_landing.webp";

const Quotes = () => {
  return (
    <section id="plans" className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row w-full my-10">
          {/* First Column/Row */}
          <div className="flex-1  p-4 text-white items-center justify-center">
            <div className="relative w-10 h-10">
              <p className="absolute top-0 left-0 font-ebgaramond text-7xl leading-none text-blue-200">
                "
              </p>
            </div>
            <p className="font-ebgaramond text-sm md:text-base text-black mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div>
              <p className="border-t-4 text-blue-600 border-blue-200 p-4">
                Okezie Emmanuel <br />{" "}
                <span className="text-xs">Financial Advisor</span>
              </p>
            </div>
          </div>
          {/* Second Column/Row */}
          <div className="flex-1 p-4  items-center justify-center">
            <div className="relative m-auto w-80 h-72 bflex items-start lg:w-96">
              <div className=" w-72 h-72 rounded-md overflow-hidden">
                <div className=" m-0 bg-green-300 w-72 h-72 clip-path-hexagonal">
                  <img
                    src={landing}
                    alt="Polygon Shape"
                    className="w-full h-full object-cover clip-polygon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-customBlue-dark clip-path-trapeziodal w-10/12 h-12"></div>
      </div>
    </section>
  );
};

export default Quotes;
