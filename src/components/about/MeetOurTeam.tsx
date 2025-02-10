import teamSlides from "../../data/teamData";
import SlideCarousel from "../SlideCarousel";

const MeetOurTeam = () => {
  return (
    <section id="plans" className="pt-12 bg-white">
      <h1 className="font-darkerGrotesque text-center text-2xl md:text-3xl font-semibold text-black mb-6">
        Meet Our Team
      </h1>
      <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
        <SlideCarousel slides={teamSlides} />
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-customBlue-dark clip-path-trapeziodal w-10/12 h-12"></div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
