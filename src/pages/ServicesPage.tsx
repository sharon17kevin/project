import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import OurProcess from "../components/services/OurProcess";
import ServicesFAQ from "../components/services/ServicesFAQ";
import ServicesHeroSection from "../components/services/ServicesHeroSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <ServicesHeroSection/>

      {/* Our Process */}
      <OurProcess/>

      {/* FAQ */}
      <ServicesFAQ/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
