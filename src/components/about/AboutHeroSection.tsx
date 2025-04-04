import aboutLanding from "../../assets/aboutCycleLanding.webp";
import { RevealAnimation } from "../RevealAnimation";

const AboutHeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center md:flex-row w-full my-10">
        {/* First Column/Row */}
        <div className="flex-1  p-4 text-white">
          <RevealAnimation>
            <p className="font-darkerGrotesque text-3xl leading-none font-semibold text-black lg:text-4xl">
              We Provide Telecommunication and Solar Energy Solutions
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <p className="font-ebgaramond mt-9 text-sm md:text-base text-black mb-6">
              We specialize in delivering cutting-edge telecommunication
              services and sustainable solar energy solutions to keep you
              connected and powered efficiently. Our mission is to provide
              innovative, cost-effective, and eco-friendly technologies that
              enhance communication and energy independence for businesses and
              households alike. nulla pariatur.
            </p>
          </RevealAnimation>
        </div>

        {/* Second Column/Row */}
        <div className="flex-1 h-72 pr-10  items-center justify-center lg:h-96">
          <div className="m-auto w-full h-full">
            <img
              src={aboutLanding}
              alt="Polygon Shape"
              className="w-full h-full object-contain clip-polygon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
