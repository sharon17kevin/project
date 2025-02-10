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
                <a href="#" className="hover:text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-secondary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Network Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-secondary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2025  KelvicTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
