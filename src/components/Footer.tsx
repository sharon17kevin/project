import { Link } from "react-router-dom";
import Logo from "../icons/Logo";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-darkerGrotesque font-bold text-black">
                Kelvic Tech.
              </span>
            </div>
            <p className="text-sm">
              Connecting people through innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className=" font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-secondary">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-secondary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-secondary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/legallayout/privacy"
                  className="hover:text-secondary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legallayout/termsofuse"
                  className="hover:text-secondary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legallayout/legal" className="hover:text-secondary">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2025 KelvicTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
