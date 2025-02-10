import { ReactNode } from "react";
import audit from '../../assets/audit.webp';
import handBulb from '../../assets/hand-bulb.webp'
import Carousel from "../Carousel";

interface ItemProps {
  title: string;
  subtitle: string;
  image: string;
}

const CarouselContent = ({ title, subtitle, image = audit }: ItemProps) => {
  return (
    <div className="w-full flex mx-auto h-[430px] px-4 sm:px-6 lg:px-12 ">
      <div className="flex flex-col h-full items-center md:flex-row w-full">
        {/* First Column/Row */}
        <div className="flex flex-row justify-center items-start px-5 text-white w-full h-1/3 md:h-full md:w-auto md:pl-16 md:flex-col">
          <div className=" w-64">
            <p className="font-darkerGrotesque text-base md:text-xl font-bold text-white">
              {title}
            </p>
            <p className="font-darkerGrotesque font-light text-base md:text-xl text-white">
              {subtitle}
            </p>
          </div>
          <button className="bg-primary mt-4 px-5 py-2 rounded-full text-black md:text-lg">Learn More</button>
        </div>

        {/* Second Column/Row */}
        <div className="flex-1 items-center justify-center h-2/3 md:h-full">
          <div className="max-w-2xl h-full mx-auto ">
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
  }
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
  return <div className="w-full py-8">
    <Carousel slides={slideList as [ReactNode]} />
  </div>;
};

export default ServicesHeroSection;
