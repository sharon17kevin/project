import { Scale } from "lucide-react";
import { RevealAnimation } from "../components/RevealAnimation";

export const Legal = () => {
  return (
    <RevealAnimation>
      <div className="prose max-w-none">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="w-8 h-8 text-gray-700" />
          <h1 className="text-3xl font-bold text-gray-900 m-0">
            Legal Information
          </h1>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Company Information
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-2">
              Company Name: Example Company Inc.
            </p>
            <p className="text-gray-600 mb-2">Registration Number: 12345678</p>
            <p className="text-gray-600 mb-2">
              Registered Address: 123 Business Street, Suite 100
            </p>
            <p className="text-gray-600">Tax ID: XX-XXXXXXX</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Licensing Information
          </h2>
          <p className="text-gray-600 mb-4">
            All content on this website is protected by copyright and other
            intellectual property rights. Our software is licensed under various
            agreements depending on the specific product or service.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              Available Licenses
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Personal Use License</li>
              <li>Commercial License</li>
              <li>Enterprise License</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Data Protection
          </h2>
          <p className="text-gray-600 mb-4">
            We are committed to protecting your personal data and complying with
            applicable data protection laws, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>GDPR (European Union)</li>
            <li>CCPA (California, USA)</li>
            <li>PIPEDA (Canada)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact Legal Department
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-2">Email: legal@example.com</p>
            <p className="text-gray-600 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-600">
              Hours: Monday - Friday, 9:00 AM - 5:00 PM EST
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Documentation
              </h3>
              <p className="text-gray-600">
                Access our legal documentation, guidelines, and policies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Compliance
              </h3>
              <p className="text-gray-600">
                Learn about our compliance with industry standards and
                regulations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </RevealAnimation>
  );
};
