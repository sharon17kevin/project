import landing from "../../assets/home_landing.webp";

const HomeHeroSect = () => {
  return (
    <div className="pt-10">
      <div className="relative bg-primary">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center">
            <div className=" max-w-2xl mx-auto">
              <h1 className="font-darkerGrotesque text-2xl md:text-3xl font-semibold text-black mb-6">
                Connect Your Business And Power Your Equipment Efficiently
              </h1>
            </div>
            <div className=" w-full mx-auto mb-12 sm:w-2/3">
              <img
                src={landing}
                alt="Description"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* First Div - Hidden below md */}
          <div className="hidden md:block md:w-1/4 h-40 items-center justify-center text-white">
            First Div
          </div>

          {/* Second Div - Hidden Triangle below md */}
          <div className="hidden md:block md:w-40 h-40 bg-white items-center justify-center text-white clip-path-diagonal"></div>

          {/* Third Div - Always Visible */}
          <div className="w-full justify-around md:flex-1 h-40 bg-white flex items-center text-white">
            {/* First Div */}
            <div className="w-1/4 h-24 flex flex-col px-3 bg-blue-500 text-white items-start justify-center">
              {/* Icon */}
              <span className="text-blue-500 text-2xl">
                📘 {/* Replace this with your icon component or library */}
              </span>

              {/* Text */}
              <span className="text-gray-700 font-medium">Example Text</span>
            </div>

            {/* Second Div */}
            <div className="w-1/4 h-24 flex flex-col px-3 bg-blue-500 text-white items-start justify-center">
              {/* Icon */}
              <span className="text-blue-500 text-2xl">
                📘
              </span>

              {/* Text */}
              <span className="text-gray-700 font-medium">Second Text</span>
            </div>

            {/* Third Div */}
            <div className="w-1/4 h-24 flex flex-col px-3 bg-blue-500 text-white items-start justify-center">
              {/* Icon */}
              <span className="text-blue-500 text-2xl">
                📘 {/* Replace this with your icon component or library */}
              </span>

              {/* Text */}
              <span className="text-gray-700 font-medium">Third Text</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSect;
