import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import MiiscoImage from '../images/matchmaking.webp'; // Replace with correct path

import { FaLinkedinIn } from 'react-icons/fa';
import teams from '../utilities/team'; // Replace with correct path
import { SiMarriott } from 'react-icons/si';

const AboutUs = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number>(0);

  const points = [
    {
      title: 'Community-Centric',
      description:
        'We are dedicated to serving the Maheshwari community by providing a platform that respects and upholds our cherished traditions. Our app focuses exclusively on Maheshwari singles, ensuring that you find a partner who shares your cultural values and beliefs.',
    },
    {
      title: 'Advanced AI-Based Matching',
      description:
        'Leveraging the latest in AI technology, our app uses advanced algorithms to analyze and match profiles based on character traits, preferences, and compatibility. This ensures that every match is not only based on traditional criteria but also on modern compatibility factors.',
    },
    {
      title: 'Comprehensive Compatibility Analysis',
      description:
        'Our matchmaking process integrates traditional Gunn matching with AI-based preference and character matching. This comprehensive approach ensures a higher success rate and more harmonious relationships.',
    },
    {
      title: 'User-Friendly Experience',
      description:
        'Our app is designed with you in mind. With an intuitive interface and seamless navigation, finding your life partner is just a few clicks away. Whether you are browsing profiles or setting your preferences, our app makes the process simple and enjoyable.',
    },
    {
      title: 'Privacy and Security',
      description:
        'We value your privacy and security above all. Our app employs state-of-the-art security measures to protect your personal information, ensuring a safe and trustworthy environment for your matrimonial journey.',
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center pt-16">
        <div className="text-center mb-16 banner h-52 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-100">About Us</h1>
        </div>
      </div>

      <div className="flex flex-col items-center mb-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-10 mx-10 shadow-lg space-y-12">
  <div className="w-full text-center">
    {/* <h1 className="text-5xl font-bold text-white mb-6">Welcome to the Smart Maheshwari Matrimonial App</h1> */}
    <h2 className="font-extrabold text-6xl text-white">Miiscollp</h2>
  </div>



  <div className="w-full px-8 text-center lg:text-left space-y-8">
    <p className="text-lg text-white leading-relaxed">
      At Misscollp, we understand that finding a life partner is one of the most significant decisions in life. Our mission is to make this journey as smooth and fulfilling as possible for the Maheshwari community. The Smart Maheshwari Matrimonial App is a pioneering platform designed to bring together tradition and technology, ensuring that every match is meaningful and lasting.
    </p>


    
  </div>
</div>


<div className="bg-purple-800 w-10/12 mx-auto bg-opacity-20 rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold text-gray-600">Our Story</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        MisscoLpp was founded with a vision to revolutionize the matrimonial experience for the Maheshwari community. Recognizing the unique needs and values of our community, we set out to create a platform that blends the best of tradition and technology. Our team of dedicated professionals has worked tirelessly to develop an app that not only meets but exceeds your expectations.
      </p>
    </div>



    <div className="min-h-screen flex flex-col items-center mb-16 bg-gray-50 p-10 space-y-10">
      <div className="relative w-full md:w-1/2 flex justify-center p-4">
        <div className="relative w-80 h-80">
          {/* Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
            <Image
              src={MiiscoImage}
              alt="miisco"
            
              className="rounded-full"
            />
          </div>
          {/* Points Container */}
         
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 text-gray-700 ">
        <h1 className="text-4xl font-bold mb-4 tracking-wide flex items-center space-x-3">
          <SiMarriott className="w-8 h-8 text-blue-500" />
          <span>Why Us</span>
        </h1>

        <div className="relative my-10 flex gap-5 items-center justify-center">
            {points.map((point, index) => (
              <div
                key={index}
                className={`gap-5 p-4 bg-white rounded shadow-md cursor-pointer transition-transform transform  ${
                  hoveredPoint === index ? 'scale-110' : ''
                }`}
             
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(0)}
              >
                <span className="text-sm font-semibold">{point.title}</span>
              </div>
            ))}
          </div>

        <ul className="space-y-5 text-lg leading-relaxed">
          {points.map((point, index) => (
            <li
              key={index}
              className={`flex items-start space-x-3 transition-opacity ${
                hoveredPoint === index ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <span className="text-blue-500 font-semibold">•</span>
              <span>
                <strong>{point.title}:</strong> {point.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>


      <div className="text-center mb-16 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Team</h1>
        <hr className="w-1/2 border-t-4 border-gray-300 mb-8" />
        <div className="flex flex-wrap justify-center">
          {teams[0].employees.map((member, index) => (
            <div
              key={index}
              className="w-60 h-64 m-4 relative overflow-hidden border border-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-500 p-1 group"
            >
              <div className="w-full h-2/3 bg-gray-600">
                <Image src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="bg-gray-800 flex flex-col items-center rounded-b-lg p-2 relative">
                <h2 className="text-md font-semibold text-white">{member.name}</h2>
                <p className="text-white">{member.position}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-2 flex items-center justify-center shadow-lg"
                >
                  <FaLinkedinIn size={20} />
                  <span className="ml-2">LinkedIn</span>
                </a>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mb-16 rounded-xl bg-gradient-to-r from-gray-800 to-teal-600 p-10 mx-10 shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-6">Our Values</h1>
        <div className="w-full flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Innovation</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in constantly pushing the boundaries of what is possible, using cutting-edge technology to deliver innovative solutions that make a real difference.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Integrity</h2>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to integrity means we always do what is right, ensuring our clients can trust us to deliver on our promises and act with honesty and transparency.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="p-6 bg-white rounded-lg shadow-md h-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Community</h2>
              <p className="text-gray-600 leading-relaxed">
                We are dedicated to making a positive impact in our community, supporting local initiatives and working together to create a better future for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r w-10/12 mx-auto from-blue-500 to-purple-600 rounded-lg p-6 mb-8 shadow-lg">
  <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
  <p className="text-lg text-white leading-relaxed">
    To connect Maheshwari singles worldwide by providing a reliable, secure, and user-friendly platform that fosters meaningful relationships and lifelong partnerships.
  </p>
</div>


      <div className="bg-gradient-to-r w-10/12 mx-auto from-green-400 to-blue-500 rounded-lg p-6 mb-8 shadow-lg">
  <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
  <p className="text-lg text-white leading-relaxed">
    To be the most trusted and preferred matrimonial app for the Maheshwari community, known for our commitment to quality, integrity, and innovation.
  </p>
</div>


      <div className="bg-gradient-to-r w-10/12 mx-auto from-pink-500 to-orange-500 rounded-lg p-6 mb-8 shadow-lg">
  <h2 className="text-3xl font-bold text-white mb-4">Join Us on This Journey</h2>
  <p className="text-lg text-white leading-relaxed mb-4">
    We invite you to be a part of this exciting journey. Create your profile today and let the Smart Maheshwari Matrimonial App help you find your perfect match. Together, we can make your dream of finding a life partner a reality.
  </p>
  <p className="text-lg text-white leading-relaxed">
    For more information and updates, follow us on our social media channels and stay connected with MisscoLpp.
  </p>
</div>

    </>
  );
};

export default AboutUs;
