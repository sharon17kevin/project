import { Link } from "react-router-dom";
import construction from "../../assets/guysConstruct.webp";
import { BsArrowUpRight } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center pb-10">
      <div className="pt-8 mt-5">
        <p className="font-darkerGrotesque text-2xl md:text-3xl font-semibold text-black mb-6">
          Who We Are
        </p>
      </div>
      <div className="max-w-7xl mx-auto my-1 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row w-full">
          {/* First Column/Row */}
          <div className="flex-1  p-4 text-white ">
            <p className="font-darkerGrotesque text-3xl leading-none font-semibold text-black lg:text-4xl">
              We Provide Telecommunication and Solar Energy Solutions
            </p>
            <p className="font-ebgaramond mt-9 text-sm md:text-base text-black mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="flex space-x-2">
              <Link to={'/products'} className="bg-secondary px-4 py-3 rounded-full">
                Visit Our Store
              </Link>
              <Link to={'/'} className="bg-primary px-4 py-3 text-black rounded-full">
                Learn More
              </Link>
            </div>
          </div>
          {/* Second Column/Row */}
          <div className="flex-1 h-96 pr-2 flex items-center justify-center">
            {/* Fix the Rounding */}
            <div className="grid grid-row-6 grid-cols-2 w-80 h-96 gap-2 p-2 clip-path-flipped-hexagonal">
              <div className="bg-blue-500 rounded shadow-md row-span-3 flex items-center justify-center">
                <img
                  src={construction}
                  alt="Polygon Shape"
                  className="w-full h-full object-cover clip-polygon"
                />
              </div>
              <div className="bg-green-500 rounded shadow-md row-span-4 flex items-center justify-center">
                <img
                  src={construction}
                  alt="Polygon Shape"
                  className="w-full h-full object-cover clip-polygon"
                />
              </div>
              <div className="bg-red-500 rounded shadow-md row-span-3 flex items-center justify-center">
                <img
                  src={construction}
                  alt="Polygon Shape"
                  className="w-full h-full object-cover clip-polygon"
                />
              </div>
              <button className="bg-primary rounded shadow-md p-3 row-span-2 flex items-center justify-center">
                <div className="w-full h-full flex flex-col">
                  <div className="h-1/2 w-full flex justify-end">
                    <BsArrowUpRight />
                  </div>
                  <div className="h-1/2 w-full text-left">
                    Check out <br /> our services
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
