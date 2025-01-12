import { Menu, Signal, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full z-10">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex h-16 justify-between">
          <div className=" flex items-center">
            <Signal className="h-8 w-8 text-blue-600" />
            <span className="ml-3 text-xl font-darkerGrotesque font-bold  text-gray-900">
              Kelvic Tech.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className=" hidden md:flex flex-1 justify-around items-center ">
            <div className=" space-x-10 font-roboto text-sm">
              <a
                href="#services"
                className="text-gray-600  hover:text-blue-600"
              >
                HOME
              </a>
              <a
                href="#plans"
                className="text-gray-600 hover:text-blue-600"
              >
                ABOUT
              </a>
              <a
                href="#coverage"
                className="text-gray-600 hover:text-blue-600"
              >
                SERVICES
              </a>
              <a
                href="#coverage"
                className="text-gray-600 hover:text-blue-600"
              >
                PRODUCTS
              </a>
            </div>
          </div>
          <div className="flex items-center justify-items-center space-x-2">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full hover:bg-green-700 transition-colors duration-300 cursor-pointer">
                🌟
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full hover:bg-green-700 transition-colors duration-300 cursor-pointer">
                🌟
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              HOME
            </a>
            <a
              href="#plans"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              ABOUT
            </a>
            <a
              href="#coverage"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              SERVICES
            </a>
            <a
              href="#coverage"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              PRODUCTS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
