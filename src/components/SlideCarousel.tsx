import { useState } from "react";
import { PersonCard } from "../data/quoteData";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

interface Props {
  slides: PersonCard[];
}

const SlideCarousel = ({ slides }: Props) => {
  let [current, setCurrent] = useState(0);

  const previous = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const next = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => (
          <div className="w-full flex-shrink-0 flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full my-10">
              {/* First Column/Row */}
              <div className="flex-1  p-4 text-white items-center justify-center">
                <div className="relative w-10 h-10">
                  <p className="absolute top-0 left-0 font-ebgaramond text-7xl leading-none text-blue-200">
                    "
                  </p>
                </div>
                <p className="font-ebgaramond text-sm md:text-base text-black mb-6">
                  {s.content}
                </p>
                <div>
                  <p className="border-t-4 text-blue-600 border-blue-200 p-4">
                    {s.name} <br /> <span className="text-xs">{s.title}</span>
                  </p>
                </div>
                <div className="flex p-4 text-black font-roboto space-x-2">
                  <button
                    onClick={previous}
                    className="w-8 h-8 flex justify-center items-center rounded-full bg-primary"
                  >
                    <FaAngleLeft />
                  </button>
                  <button
                    onClick={next}
                    className="w-8 h-8 flex justify-center items-center rounded-full bg-primary"
                  >
                    <FaAngleRight />
                  </button>
                </div>
              </div>
              {/* Second Column/Row */}
              <div className="flex-1 p-4  items-center justify-center">
                <div className="relative m-auto w-80 h-72 bflex items-start lg:w-96">
                  <div className=" w-72 h-72 rounded-md overflow-hidden">
                    <div className=" m-0 bg-green-300 w-72 h-72 clip-path-hexagonal">
                      <img
                        src={s.image}
                        alt="Polygon Shape"
                        className="w-full h-full object-cover clip-polygon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideCarousel;
