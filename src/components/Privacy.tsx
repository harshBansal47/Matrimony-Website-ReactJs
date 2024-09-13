import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto pt-20 p-6">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
        <p className="text-gray-600 mb-6">
          Welcome to our AI-based matrimonial app exclusively for the Maheshwari community. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our service. By using our app, you agree to the terms of this Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
        <p className="text-gray-600 mb-6">
          We collect the following types of information:
          <ul className="list-disc list-inside">
            <li>Personal Information: Name, age, gender, caste, contact details, and other biodata provided by you.</li>
            <li>Usage Information: Information about how you use our app, including your interactions with matches and communications.</li>
            <li>Technical Information: Device information, IP address, browser type, and operating system.</li>
          </ul>
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-600 mb-6">
          We use the information we collect to:
          <ul className="list-disc list-inside">
            <li>Provide and improve our services.</li>
            <li>Match you with potential partners based on your preferences.</li>
            <li>Communicate with you about your account and our services.</li>
            <li>Personalize your experience on our app.</li>
            <li>Analyze usage patterns to improve our app.</li>
          </ul>
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Sharing Your Information</h2>
        <p className="text-gray-600 mb-6">
          We do not sell or rent your personal information to third parties. We may share your information with:
          <ul className="list-disc list-inside">
            <li>Other users of the app to help you find matches.</li>
            <li>Service providers who assist us in operating our app and providing our services.</li>
            <li>Law enforcement or regulatory authorities if required by law.</li>
          </ul>
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Security</h2>
        <p className="text-gray-600 mb-6">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet-based service can be 100% secure, and we cannot guarantee the absolute security of your information.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
        <p className="text-gray-600 mb-6">
          We retain your personal information for as long as necessary to provide our services and comply with legal obligations. If you wish to delete your account or request that we no longer use your information, please contact us at <a href="mailto:support@miisco.com" className="text-blue-500 hover:underline">support@miisco.com</a>.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Children's Privacy</h2>
        <p className="text-gray-600 mb-6">
          Our app is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected such information, we will take steps to delete it.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-600 mb-6">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our app. Your continued use of the app after any changes indicates your acceptance of the new terms.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@miisco.com" className="text-blue-500 hover:underline">support@miisco.com</a>.
        </p>
      </div>
    </div>
  );
}