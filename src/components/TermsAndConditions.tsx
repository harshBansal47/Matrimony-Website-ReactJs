import React from "react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  const handleAccept = () => {
    alert("You have accepted the terms and conditions.");
    // Add your logic for handling the accept action (e.g., redirecting or updating the state)
  };
  return (
    <div className="container mx-auto p-6 pt-20">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Terms and Conditions</h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
        <p className="text-gray-600 mb-6">
          Welcome to our AI-based matrimonial app exclusively for the Maheshwari community. By using our service, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Eligibility</h2>
        <p className="text-gray-600 mb-6">
          Our service is available only to individuals who are Maheshwari by caste and are legally eligible to marry. By using this app, you represent and warrant that you meet these eligibility requirements.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Account</h2>
        <p className="text-gray-600 mb-6">
          You must create an account to use our service. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">4. User Content</h2>
        <p className="text-gray-600 mb-6">
          By uploading your biodata and other personal information, you grant us the right to use, reproduce, and display this content to help you find a match. You are responsible for the accuracy and legality of the content you upload.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Privacy</h2>
        <p className="text-gray-600 mb-6">
          We are committed to protecting your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our app, you agree to the terms of our Privacy Policy.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Matching and Communication</h2>
        <p className="text-gray-600 mb-6">
          Our app uses AI to match you with potential partners based on your preferences. We do not guarantee the accuracy or suitability of any matches. Communication with potential partners is at your own risk, and we are not responsible for any interactions between users.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Prohibited Activities</h2>
        <p className="text-gray-600 mb-6">
          You agree not to engage in any prohibited activities, including but not limited to: impersonating another person, using the service for unlawful purposes, or uploading false or misleading information.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to terminate or suspend your account at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users of the app.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          Our service is provided on an "as is" and "as available" basis. We do not warrant that the service will be uninterrupted or error-free. In no event shall we be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the app.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to Terms and Conditions</h2>
        <p className="text-gray-600 mb-6">
          We reserve the right to modify these Terms and Conditions at any time. Your continued use of the app following any changes indicates your acceptance of the new terms.
        </p>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Governing Law</h2>
        <p className="text-gray-600 mb-6">
          These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Mathura, UP.
        </p>
        
        <p className="text-gray-600 mb-6">
          If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:support@miisco.com" className="text-blue-500 hover:underline">support@miisco.com</a>.
        </p>
      </div>
      <div className="text-center mt-8">
       <Link to="/">
       <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600"
        >
          Accept
        </button>
       </Link>
      </div>
    </div>
  );
}