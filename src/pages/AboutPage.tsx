import React from "react";
import Footer from "../components/Footer";
import AboutHeroSection from "../components/about/AboutHeroSection";
import MeetOurTeam from "../components/about/MeetOurTeam";
import Mission from "../components/about/Mission";
import WhoWeAre from "../components/about/WhoWeAre";
import MailingList from "../components/home/MailingList";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-primary">
      
      {/* Hero Section */}
      <AboutHeroSection/>

      {/* Who Are We */}
      <WhoWeAre/>

      {/* Mission Statement */}
      <Mission />

      {/* Meet Our Team */}
      <MeetOurTeam/>

      {/* Mailing List */}
      <MailingList/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default AboutPage;
