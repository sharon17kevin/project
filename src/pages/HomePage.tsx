import {
  Signal
} from "lucide-react";
import NavBar from "../components/NavBar";
import HomeHeroSect from "../components/home/HomeHeroSect";
import Quotes from "../components/home/Quotes";
import ServicesSection from "../components/home/ServicesSection";
import WhyKelvicTech from "../components/home/WhyKelvicTech";
import MailingList from "../components/home/MailingList";

const HomePage = () => {

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <NavBar/>

      {/* Hero Section */}
      <HomeHeroSect/>

      {/* Services Section */}
      <ServicesSection/>

      {/* Plans Section */}
      <WhyKelvicTech/>

      {/* Features Section */}
      <Quotes/>

      {/* Mailing List Section */}
      <MailingList/>

      {/* Footer */}
      <footer className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Signal className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-black">
                  ConnectTech
                </span>
              </div>
              <p className="text-sm">
                Connecting people through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Network Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2024 ConnectTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
