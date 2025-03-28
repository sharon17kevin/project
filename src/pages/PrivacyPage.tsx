import { RevealAnimation } from "../components/RevealAnimation";

export const PrivacyPolicy = () => {
  return (
    <RevealAnimation>
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, including
            but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Provide and maintain our services</li>
            <li>Process your transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Communicate with you about products, services, and events</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-600">
            We do not sell or rent your personal information to third parties.
            We may share your information with trusted service providers who
            assist us in operating our website, conducting our business, or
            servicing you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-600">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            <a
              href="mailto:privacy@example.com"
              className="text-blue-600 hover:text-blue-800"
            >
              privacy@example.com
            </a>
          </p>
        </section>
      </div>
    </RevealAnimation>
  );
};
