import landing from '../../assets/home_landing.webp'

const WhyKelvicTech = () => {
  return (
    <section id="plans" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="font-darkerGrotesque text-center text-2xl md:text-3xl font-semibold text-black mb-1">
          Why Choose Kelvic Technologies
        </h2>
        <div className="flex flex-col md:flex-row w-full my-10">
          {/* First Column/Row */}
          <div className="flex-1 p-4  items-center justify-center">
            <div className='relative m-auto w-80 h-72 bflex items-start lg:w-96'>
              <div className=' w-72 h-72 rounded-md overflow-hidden'>
                <div className=" m-0 bg-green-300 w-72 h-72 clip-path-hexagonal">
                  <img
                    src={landing}
                    alt="Polygon Shape"
                    className="w-full h-full object-cover clip-polygon"
                  />
                </div>
              </div>
              <div className="absolute bottom-10 right-0 w-36 h-20  lg:w-40 ">
                <div className="relative w-full h-full ">
                  <button className="w-32 h-14 bg-secondary flex items-center justify-center"> Read More </button>
                  <button className="absolute top-2 left-2 w-32 h-14 border-2 border-white transition-transform hover:translate-x-1 hover:translate-y-1"></button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column/Row */}
          <div className="flex-1  p-4 text-white">
            <p className="font-roboto text-xs text-blue-500">
              About Our Company
            </p>
            <p className="font-darkerGrotesque text-3xl leading-none font-semibold text-black">
              We build more competitive telecommunication infrastructure
            </p>
            <p className="font-ebgaramond text-sm md:text-base text-black mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div>
              <p className="border-l-4 text-blue-600 border-blue-500 bg-blue-100 p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing ealit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKelvicTech;
