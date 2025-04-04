import { RevealAnimation } from "../RevealAnimation";

const Mission = () => {
  return (
    <div className="bg-secondary w-full py-20 flex justify-center items-center">
        <div className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center">
          <RevealAnimation>
            <h2 className="font-darkerGrotesque text-2xl md:text-3xl font-semibold text-white mb-6">Our Mission</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <p className="font-ebgaramond mt-9 text-base md:text-xl text-white mb-6">
              We strive to revolutionize the telecommunications industry by providing
              innovative, reliable, and sustainable connectivity solutions that
              empower businesses and individuals to thrive in the digital age.
            </p>
          </RevealAnimation>
        </div>
    </div>
  );
};

export default Mission;
