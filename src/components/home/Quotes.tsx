import whyHomeSlide from '../../data/quoteData';
import SlideCarousel from '../SlideCarousel';

const Quotes = () => {
  return (
    <section id="plans" className="pt-10 bg-white">
      <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <SlideCarousel slides={whyHomeSlide}/>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-customBlue-dark clip-path-trapeziodal w-10/12 h-12"></div>
      </div>
    </section>
  );
};

export default Quotes;
