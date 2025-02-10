import MeetOurTeam from "../components/about/MeetOurTeam";
import Footer from "../components/Footer";
import HomeHeroSect from "../components/home/HomeHeroSect";
import MailingList from "../components/home/MailingList";
import ServicesSection from "../components/home/ServicesSection";
import WhyKelvicTech from "../components/home/WhyKelvicTech";

const HomePage = () => {

  return (
    <div className="min-h-screen bg-primary">
      
      {/* Hero Section */}
      <HomeHeroSect/>

      {/* Services Section */}
      <ServicesSection/>

      {/* Plans Section */}
      <WhyKelvicTech/>

      {/* Features Section */}
      <MeetOurTeam/>

      {/* Mailing List Section */}
      <MailingList/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default HomePage;
