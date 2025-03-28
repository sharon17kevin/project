import landing from "../../assets/home_landing.webp";
import Collection from "../../icons/Collection";
import Eco from "../../icons/Eco";
import Notepad from "../../icons/Notepad";
import { RevealAnimation } from "../RevealAnimation";

const HomeHeroSect = () => {
  return (
    <div className="pt-2">
      <div className="relative bg-primary">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center">
            <div className=" max-w-2xl mx-auto">
              <RevealAnimation>
                <h1 className="font-darkerGrotesque text-2xl md:text-3xl font-semibold text-black mb-6">
                  Connect Your Business And Power Your Equipment Efficiently
                </h1>
              </RevealAnimation>
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
            <div className="hidden md:block md:w-1/4 h-40 items-center justify-center font-ebgaramond font-light text-ellipsis text-customBlue-dark px-4 lg:px-10">
              <RevealAnimation>
                <p>
                  Smart Connectivity Solutions for Faster, Stronger, and More
                  Efficient Performance.
                </p>
              </RevealAnimation>
            </div>
          {/* Second Div - Hidden Triangle below md */}
          <div className="hidden md:block md:w-40 h-40 bg-white items-center justify-center text-white clip-path-diagonal"></div>

          {/* Third Div - Always Visible */}
          <div className="w-full justify-around md:flex-1 h-40 bg-white flex items-center text-white">
            {/* First Div */}
            <div className="w-1/4 h-24 flex flex-col px-3 text-white items-start justify-center">
              {/* Icon */}
              <span className="text-blue-500 text-2xl">
                <Collection />
              </span>

              {/* Text */}
              <span className="text-gray-700 font-darkerGrotesque font-semibold text-lg lg:text-2xl">
                X Years Of Experience
              </span>
            </div>

            {/* Second Div */}
            <div className="w-1/4 h-24 flex flex-col px-3 text-white items-start justify-center">
              {/* Icon */}
              <span className="text-blue-500 text-2xl">
                <Notepad />
              </span>

              {/* Text */}
              <span className="text-gray-700 font-darkerGrotesque font-semibold text-lg lg:text-2xl">
                20+ Projects completed
              </span>
            </div>

            {/* Third Div */}
            <div className="w-1/4 h-24 flex flex-col px-3 text-white items-start justify-center">
              {/* Icon */}
              <span className="text-blue-500 text-2xl">
                <Eco />
              </span>

              {/* Text */}
              <span className="text-gray-700 font-darkerGrotesque font-semibold text-lg lg:text-2xl">
                Eco-concerned
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSect;
