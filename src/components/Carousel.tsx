import { useState, useEffect, ReactNode } from "react";

interface Props {
  slides: [ReactNode];
  interval?: number;
}

const Carousel = ({ slides, interval = 10000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval, resetTimer]);

  return (
    <>
      <div className="relative w-full h-[430px] overflow-visible">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity ease-out duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
      {/* Navigation Dots */}
      <div className=" w-3/4 mx-auto h-12 flex justify-around items-end mt-6 lg:mt-12">
        {slides.map((_, index) => (
          <>
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setResetTimer(resetTimer + 1);
              }}
              className={`flex-1 pb-5 flex justify-center items-center text-white ${
                index === currentIndex ? "border-b-8" : "border-b-4"
              } border-white font-ebgaramond hover:border-b-8`}
            >
              {`0${index + 1}`}
            </button>
            {index !== slides.length - 1 && (
              <div className="h-2 w-[1px] bg-white"></div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Carousel;
