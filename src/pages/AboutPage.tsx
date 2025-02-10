import React from "react";
import Footer from "../components/Footer";
import AboutHeroSection from "../components/about/AboutHeroSection";
import MeetOurTeam from "../components/about/MeetOurTeam";
import Mission from "../components/about/Mission";
import WhoWeAre from "../components/about/WhoWeAre";
import MailingList from "../components/home/MailingList";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

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
