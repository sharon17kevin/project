import { ReactNode } from "react";
import audit from "../../assets/audit.webp";
import handBulb from "../../assets/hand-bulb.webp";
import Carousel from "../Carousel";

interface ItemProps {
  text: string;
  image: string;
}

const CarouselContent = ({ text, image = audit }: ItemProps) => {
  return (
    <div className="max-w-7xl mx-auto h-[430] px-4 sm:px-6 lg:px-8 bg-gray-200">
      <div className="flex flex-col h-96 items-center md:flex-row w-full">
        {/* First Column/Row */}
        <div className="flex-1 flex-col p-4 px-5 text-white bg-green-300 h-1/3 md:h-full">
          <p className="font-darkerGrotesque mt-9 text-base md:text-xl font-bold text-white mb-6">
            {text}
          </p>
          <div className="flex justify-start">
            <button className="bg-primary px-5 py-2 rounded-full text-black md:text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Second Column/Row */}
        <div className="flex-1 pr-10  items-center justify-center bg-yellow-300 h-2/3 md:h-full">
          <div className="m-auto w-full h-full">
            <img
              src={image}
              alt="Polygon Shape"
              className="w-full h-full object-contain clip-polygon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const content = [
  {
    title: "Fast-track your way to sustainable energy operations",
    subtitle: "Fast-track your way to sustainable energy operations",
    image: audit,
  },
  {
    title: "OKOKOLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle: "Fast-track your way to sustainable energy operations",
    image: handBulb,
  },
  {
    title: "NIKNINNLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle: "Fast-track your way to sustainable energy operations",
    image: audit,
  },
  {
    title: "KOKKKOLorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subtitle: "Fast-track your way to sustainable energy operations",
    image: handBulb,
  },
];

const slideList = content.map((slide) => {
  return (
    <CarouselContent
      title={slide.title}
      subtitle={slide.subtitle}
      image={slide.image}
    />
  );
});

const ServicesHeroSection = () => {
  return (
    <div className="w-full py-8">
      <Carousel slides={slideList as [ReactNode]} />
    </div>
  );
};

export default ServicesHeroSection;
