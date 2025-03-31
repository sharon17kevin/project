import { motion } from "motion/react";
import { useRef } from "react";
import sampleImage from "../../assets/guysConstruct.webp";
import ExpandableTile from "../ExpandableTile";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1539683255143-73a6b838b106?auto=format&fit=crop&q=80",
    title: "High-Speed Internet",
    description:
      "Experience lightning-fast connectivity with our state-of-the-art fiber optic network. We deliver reliable, high-speed internet solutions for both residential and business customers, ensuring you stay connected when it matters most.",
    features: [
      "Fiber optic speeds up to 1Gbps for residential customers",
      "Business packages with dedicated bandwidth and symmetric speeds",
      "Unlimited data with no hidden caps or throttling",
      "Professional installation and setup included",
      "Optional static IP addresses for business customers",
      "Advanced Wi-Fi router with mesh network capability",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80",
    title: "Mobile Services",
    description:
      "Stay connected on the go with our comprehensive mobile services. Our nationwide network coverage ensures crystal-clear calls and fast data speeds, while flexible plans cater to both individual and family needs.",
    features: [
      "Nationwide 5G coverage with no roaming charges",
      "Flexible family plans with shared data pools",
      "International calling packages to over 150 countries",
      "Mobile device protection and insurance options",
      "Easy eSIM activation for compatible devices",
      "Visual voicemail and HD voice calling",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80",
    title: "Digital TV & Streaming",
    description:
      "Transform your entertainment experience with our comprehensive digital TV and streaming services. Access premium content, live sports, and exclusive shows through our advanced platform, designed for modern viewing habits.",
    features: [
      "Over 200+ channels with premium package options",
      "4K Ultra HD content on compatible channels",
      "Cloud DVR with unlimited storage",
      "Multi-room viewing capability",
      "Integrated streaming apps and services",
      "Voice-controlled remote with smart recommendations",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    title: "Cloud Solutions",
    description:
      "Elevate your business with our enterprise-grade cloud solutions. We provide secure, scalable, and reliable cloud services that help you modernize your infrastructure and accelerate digital transformation.",
    features: [
      "Secure cloud storage with automatic backup",
      "Virtual private servers with dedicated resources",
      "Disaster recovery and business continuity solutions",
      "Hybrid cloud deployment options",
      "24/7 monitoring and management",
      "Compliance-ready infrastructure for regulated industries",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    title: "Business Networks",
    description:
      "Power your business with our advanced networking solutions. We design, implement, and manage network infrastructure that delivers the performance, security, and reliability your organization demands.",
    features: [
      "Dedicated fiber connections with guaranteed bandwidth",
      "MPLS and SD-WAN solutions for multi-site connectivity",
      "Quality of Service (QoS) for critical applications",
      "Network monitoring and proactive maintenance",
      "Professional network design and consultation",
      "Scalable solutions that grow with your business",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive cybersecurity solutions. We offer multi-layered security services that safeguard your network, data, and users from evolving cyber threats.",
    features: [
      "Next-generation firewall protection",
      "Advanced threat detection and prevention",
      "Email security and spam filtering",
      "Endpoint protection for all devices",
      "Regular security audits and compliance reporting",
      "Security awareness training for employees",
    ],
  },
];
const FixMore = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className="w-full">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    staggerChildren: 0.2,
                    when: "beforeChildren",
                  },
                },
              }}
              whileInView="visible"
              viewport={{ root: ref, once: true, amount: 0.3 }}
              initial="hidden"
              className="p-4 flex flex-col"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                      },
                    },
                  }}
                >
                  <div className="w-full">
                    <div className="w-full">
                      <img
                        src={`${service.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={service.title}
                        className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold text-black">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-gray-900 text-lg">
                        {service.description}
                      </p>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-black">
                          Key Features
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center text-gray-900"
                            >
                              <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixMore;
