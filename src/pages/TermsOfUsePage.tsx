import { RevealAnimation } from "../components/RevealAnimation";

export const TermsOfUse = () => {
  return (
    <RevealAnimation>
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not
            agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            2. Use License
          </h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on our website for personal,
            non-commercial transitory viewing only.
          </p>
          <p className="text-gray-600">
            This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Transfer the materials to another person</li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              our website
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            3. Disclaimer
          </h2>
          <p className="text-gray-600">
            The materials on our website are provided on an 'as is' basis. We
            make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            4. Limitations
          </h2>
          <p className="text-gray-600">
            In no event shall we or our suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            5. Governing Law
          </h2>
          <p className="text-gray-600">
            These terms and conditions are governed by and construed in
            accordance with the laws of your jurisdiction and you irrevocably
            submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </RevealAnimation>
  );
};
