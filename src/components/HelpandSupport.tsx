import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function HelpAndSupport() {
  return (
    <div className="container mx-auto pt-20 p-6">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Help and Support</h1>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        
        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* Existing FAQs */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How do I create an account?</h3>
              <p className="text-gray-600">To create an account, click on the "Sign Up" button on the homepage and fill in the required details. You will receive a confirmation email to verify your account.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How can I reset my password?</h3>
              <p className="text-gray-600">If you forgot your password, click on the "Forgot Password" link on the login page and follow the instructions to reset it.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How do I update my profile information?</h3>
              <p className="text-gray-600">To update your profile information, log in to your account, go to the "Profile" section, and edit your details. Make sure to save the changes.</p>
            </div>

            {/* New FAQs */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How do I report technical issues or bugs?</h3>
              <p className="text-gray-600">You can contact our support team through the "Help" section in the app or email us at <a href="mailto:contact@smartmaheshwari.com" className="text-blue-500 hover:underline">contact@smartmaheshwari.com</a> for assistance.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">What devices are supported by the app?</h3>
              <p className="text-gray-600">The app is currently only available for Android devices.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How are matches prioritized?</h3>
              <p className="text-gray-600">Matches are prioritized based on a combination of user preferences, mutual interests, and astrological compatibility.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How do I delete or deactivate my account?</h3>
              <p className="text-gray-600">You can delete or deactivate your account from the settings page. Once deactivated, your profile will no longer be visible to others.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">What is the purpose of this matrimonial app?</h3>
              <p className="text-gray-600">This app is designed to help individuals in the Maheshwari community find suitable matches based on personal preferences, interests, and astrological compatibility using AI.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Who can register on this app?</h3>
              <p className="text-gray-600">This app is exclusively for members of the Maheshwari community looking for marriage prospects.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How does the AI-based matchmaking system work?</h3>
              <p className="text-gray-600">Our AI uses the data provided during registration, including preferences, interests, and astrological factors, to recommend highly compatible matches.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Is the app free to use?</h3>
              <p className="text-gray-600">Yes, the app is free for all Maheshwari community members, with no hidden fees.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">How is my personal data used?</h3>
              <p className="text-gray-600">Your personal information is used solely for matchmaking and is protected by strict privacy policies to ensure data security.</p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex items-start mb-8 md:mb-0">
              <FaEnvelope className="text-4xl text-gray-700 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email Support</h3>
                <p className="text-gray-600">You can reach our support team at <a href="mailto:support@miisco.com" className="text-blue-500 hover:underline">support@miisco.com</a> for any assistance.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhone className="text-4xl text-gray-700 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone Support</h3>
                <p className="text-gray-600">For immediate assistance, call us at <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 234 567 890</a>. Our support team is available 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">User Guides</h3>
              <p className="text-gray-600">Explore our comprehensive user guides to get the most out of our app. <a href="/guides" className="text-blue-500 hover:underline">View Guides</a></p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Community Forum</h3>
              <p className="text-gray-600">Join our community forum to ask questions, share tips, and connect with other users. <a href="/forum" className="text-blue-500 hover:underline">Visit Forum</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
