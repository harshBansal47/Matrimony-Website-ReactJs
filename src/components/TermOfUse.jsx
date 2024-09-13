import React from "react";

export default function TermsOfUse() {
  return (
    <div className="container mx-auto pt-20 p-6">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Terms of Use</h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using our AI-based matrimonial app, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our app.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
          <p className="text-gray-600">
            Our app is designed to help Maheshwari individuals find compatible partners through AI-based matchmaking. Users can create profiles, upload biodata, and communicate with potential matches.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
          <p className="text-gray-600">
            You are responsible for your use of the app and for any content you upload. You agree to provide accurate and truthful information and to update your profile as necessary to maintain its accuracy.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Prohibited Conduct</h2>
          <p className="text-gray-600">
            You agree not to engage in any of the following prohibited activities:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-6">
            <li>Impersonating another person or entity.</li>
            <li>Using the app for any unlawful purpose.</li>
            <li>Uploading false, misleading, or inappropriate content.</li>
            <li>Harassing or abusing other users.</li>
            <li>Attempting to gain unauthorized access to our systems or data.</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Account Security</h2>
          <p className="text-gray-600">
            You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-600">
            All content and materials on the app, including text, graphics, logos, and software, are the property of our company or our licensors and are protected by intellectual property laws. You agree not to reproduce, distribute, or create derivative works from any content without our prior written consent.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to terminate or suspend your account at any time, without notice, for conduct that we believe violates these Terms of Use or is harmful to other users of the app.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600">
            Our service is provided on an "as is" and "as available" basis. We do not warrant that the service will be uninterrupted or error-free. In no event shall we be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the app.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to Terms of Use</h2>
          <p className="text-gray-600">
            We reserve the right to modify these Terms of Use at any time. Your continued use of the app following any changes indicates your acceptance of the new terms.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
          <p className="text-gray-600">
            These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Mathura, UP.
          </p>
        </section>
        
        <section>
          <p className="text-gray-600">
            If you have any questions or concerns about these Terms of Use, please contact us at <a href="mailto:support@miisco.com" className="text-blue-500 hover:underline">support@miisco.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}