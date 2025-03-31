import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cart from "../icons/Cart";
import Logo from "../icons/Logo";
import Search from "../icons/Search";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const showAlert = () => setIsVisible(true);
  const closeAlert = () => setIsVisible(false);

  const location = useLocation();
  const navigate = useNavigate()

  return (
    <nav
      className={`w-full z-10 ${
        location.pathname === "/services" ? "bg-secondary" : "bg-primary"
      } `}
    >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex h-16 justify-between">
          <div className=" flex items-center" onClick={()=> navigate('/')}>
            <Logo />
            <span
              className={`ml-3 text-xl font-darkerGrotesque font-bold  ${
                location.pathname === "/services"
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Kelvic Tech.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className=" hidden md:flex flex-1 justify-around items-center">
            <div className=" space-x-10 font-roboto text-sm">
              <Link
                to="/"
                className={`${
                  location.pathname === "/services"
                    ? "text-white"
                    : "text-gray-600"
                }  ${
                  location.pathname === "/services"
                    ? "hover:text-black"
                    : "hover:text-blue-600"
                }`}
              >
                HOME
              </Link>
              <Link
                to="/about"
                className={`${
                  location.pathname === "/services"
                    ? "text-white"
                    : "text-gray-600"
                }  ${
                  location.pathname === "/services"
                    ? "hover:text-black"
                    : "hover:text-blue-600"
                }`}
              >
                ABOUT
              </Link>
              <Link
                to="/services"
                className={`${
                  location.pathname === "/services"
                    ? "text-white"
                    : "text-gray-600"
                }  ${
                  location.pathname === "/services"
                    ? "hover:text-black"
                    : "hover:text-blue-600"
                }`}
              >
                SERVICES
              </Link>
              <Link
                to="/products"
                className={`${
                  location.pathname === "/services"
                    ? "text-white"
                    : "text-gray-600"
                }  ${
                  location.pathname === "/services"
                    ? "hover:text-black"
                    : "hover:text-blue-600"
                }`}
              >
                PRODUCTS
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-items-center space-x-2">
            <div className="flex items-center justify-center">
              <button
                onClick={showAlert}
                className="w-10 h-10 bg-customBlue-light flex items-center justify-center rounded-full hover:bg-gray-400 transition-colors duration-300 cursor-pointer"
              >
                {<Search />}
              </button>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/cart" className="w-10 h-10 bg-customBlue-light flex items-center justify-center rounded-full hover:bg-gray-400 transition-colors duration-300 cursor-pointer">
                <Cart />
              </Link>
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
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              SERVICES
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              PRODUCTS
            </Link>
          </div>
        </div>
      )}
      {/* Alert Dialog */}
      {isVisible && (
        <div onClick={closeAlert} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          {/* Alert Box */}
          <div onClick={(e)=>{e.stopPropagation()}} className="bg-white w-96 p-6 pt-2 rounded-lg shadow-lg text-center">
            <div className="flex justify-end">
              <button onClick={closeAlert} className="p-2"><CgClose/></button>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Search Our Catalog
            </h2>
            {/* <p className="text-gray-600 mb-6">
              Just need a device from our catalog? Search for it!
            </p> */}
            <SearchInput dismissDialog={closeAlert} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
