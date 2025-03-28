import { Link } from "react-router-dom";
import construction from "../../assets/guysConstruct.webp";
import { RevealAnimation } from "../RevealAnimation";

const WhyKelvicTech = () => {
  return (
    <section id="plans" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-center items-center">
          <RevealAnimation>
            <h2 className="font-darkerGrotesque text-center text-2xl md:text-3xl font-semibold text-black mb-1">
              Why Choose Kelvic Technologies
            </h2>
          </RevealAnimation>
        </div>
        <div className="flex flex-col md:flex-row w-full my-10">
          {/* First Column/Row */}
          <div className="flex-1 p-4  items-center justify-center">
            <div className="relative m-auto w-80 h-72 bflex items-start lg:w-96">
              <div className=" w-72 h-72 rounded-md overflow-hidden">
                <RevealAnimation delay={0.7} y_hidden={0} x_hidden={-75}>
                  <div className=" m-0 bg-green-300 w-72 h-72 clip-path-hexagonal">
                    <img
                      src={construction}
                      alt="Polygon Shape"
                      className="w-full h-full object-cover clip-polygon"
                    />
                  </div>
                </RevealAnimation>
              </div>
              <div className="absolute bottom-10 right-0 w-36 h-20  lg:w-40 ">
                <div className="relative w-full h-full ">
                  <Link
                    to={"/about"}
                    className="w-32 h-14 bg-secondary text-white flex items-center justify-center"
                  >
                    {" "}
                    Read More{" "}
                  </Link>
                  <Link
                    to={"/about"}
                    className="absolute top-2 left-2 w-32 h-14 border-2 border-white transition-transform hover:translate-x-1 hover:translate-y-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Column/Row */}
          <div className="flex-1  p-4 text-white">
            <RevealAnimation delay={0.7} y_hidden={0} x_hidden={75}>
              <p className="font-roboto text-xs text-blue-500">
                About Our Company
              </p>
              <p className="font-darkerGrotesque text-3xl leading-none font-semibold text-black">
                We build more competitive telecommunication infrastructure
              </p>
              <p className="font-ebgaramond text-sm md:text-base text-black mb-6">
                We specialize in connecting businesses with the best telecom
                infrastructure—fiber networks, data centers, and power
                systems—ensuring faster speeds, lower costs, and future-proof
                connectivity. With our expert insights and trusted partnerships,
                we simplify the process, so you get the right solution, at the
                right time, with zero hassle.
              </p>
              <div className="bg-blue-200">
                <p className="border-l-4 text-blue-600 border-blue-500 p-4">
                  We help businesses adopt efficient, eco-friendly power
                  solutions for a more sustainable and resilient infrastructure.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKelvicTech;
