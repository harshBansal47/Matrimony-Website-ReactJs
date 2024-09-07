import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import MiiscoImage from '../images/matchmaking.webp'; // Replace with correct path
import { FaLinkedinIn } from 'react-icons/fa';
import teams from '../utilities/team'; // Replace with correct path
import { SiMarriott } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// interface TeamMember {
//   name: string;
//   position: string;
//   imageUrl: string;
//   linkedin: string;
// }

interface Points {
  title: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number>(0);

  const points: Points[] = [
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

  const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: true });
  const { ref: ourStoryRef, inView: ourStoryInView } = useInView({ triggerOnce: true });
  const { ref: whyUsRef, inView: whyUsInView } = useInView({ triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });
  const { ref: joinUsRef, inView: joinUsInView } = useInView({ triggerOnce: true });

  const bannerAnimation = useAnimation();
  const ourStoryAnimation = useAnimation();
  const whyUsAnimation = useAnimation();
  const teamAnimation = useAnimation();
  const valuesAnimation = useAnimation();
  const missionAnimation = useAnimation();
  const visionAnimation = useAnimation();
  const joinUsAnimation = useAnimation();
  useEffect(() => {
    if (bannerInView) bannerAnimation.start({ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } });
    if (ourStoryInView) ourStoryAnimation.start({ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } });
    if (whyUsInView) whyUsAnimation.start({ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } });
    if (teamInView) teamAnimation.start({ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } });
    if (valuesInView) valuesAnimation.start({ opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.6 } });
    if (missionInView) missionAnimation.start({ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } });
    if (visionInView) visionAnimation.start({ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } });
    if (joinUsInView) joinUsAnimation.start({ opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } });
  }, [
    bannerInView, ourStoryInView, whyUsInView, teamInView, valuesInView, missionInView,
    visionInView, joinUsInView,
    bannerAnimation, ourStoryAnimation, whyUsAnimation, teamAnimation, valuesAnimation,
    missionAnimation, visionAnimation, joinUsAnimation,
  ]);
  
  

  return (
    <>
      <div className="flex flex-col justify-center pt-16">
        <motion.div
          ref={bannerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={bannerAnimation}
          className="text-center mb-16 banner h-52 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
        >
          <h1 className="text-4xl font-bold text-gray-100">About Us</h1>
        </motion.div>
      </div>

      <motion.div
        ref={ourStoryRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ourStoryAnimation}
        className="bg-purple-800 w-11/12 md:w-10/12 lg:w-8/12 mx-auto bg-opacity-20 rounded-lg p-6 mb-8"
      >
        {/* <h2 className="text-3xl font-bold text-gray-600">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          MisscoLpp was founded with a vision to revolutionize the matrimonial experience for the Maheshwari community. Recognizing the unique needs and values of our community, we set out to create a platform that blends the best of tradition and technology. Our team of dedicated professionals has worked tirelessly to develop an app that not only meets but exceeds your expectations.
        </p> */}

<section className="py-16 bg-gradient-to-r from-fuchsia-800 to-purple-800 text-white px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">How We Work</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Powered by cutting-edge AI and astrological insights, we seamlessly connect you to your perfect match based on your biodata, preferences, and personality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Step 1: Register & Provide Info</h3>
            <p className="text-base">Enter your personal details, including professional info, hobbies, and preferences, to get started.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Step 2: AI Astrological Data Extraction</h3>
            <p className="text-base">Our system intelligently extracts astrological data using your birth details, initiating the matching process.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Step 3: Gunn Matching</h3>
            <p className="text-base">We perform Gunn matching based on astrological compatibility to shortlist potential partners.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Step 4: AI Preference Matching</h3>
            <p className="text-base">Our AI analyzes personal preferences like hobbies, age, and location to identify compatible matches.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-4">Step 5: Final Match Suggestions</h3>
            <p className="text-base">Receive AI-powered match suggestions, combining astrological data and your personal preferences.</p>
          </div>
        </div>
      </div>
    </section>
      </motion.div>

      <motion.div
        ref={whyUsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={whyUsAnimation}
        className="min-h-screen flex flex-col items-center mb-16 bg-gray-50 p-6 md:p-10 space-y-10"
      >
        <div className="relative w-full md:w-1/2 flex justify-center p-4">
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
              <Image src={MiiscoImage} alt="miisco" className="rounded-full" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 p-4 text-gray-700">
          <h1 className="text-4xl font-bold mb-4 tracking-wide flex items-center space-x-3">
            <SiMarriott className="w-8 h-8 text-blue-500" />
            <span>Why Us</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 my-10 space-y-5 md:space-y-0">
            <div className="relative flex flex-col justify-between space-y-4 md:space-y-0 md:mr-10">
              {points.map((point, index) => (
                <div
                  key={index}
                  className={`p-4 bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform ${
                    hoveredPoint === index ? 'scale-105 bg-blue-100' : 'bg-white'
                  } hover:shadow-xl`}
                  onMouseEnter={() => setHoveredPoint(index)}
                  onClick={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(0)}
                >
                  <span className="text-sm font-semibold text-gray-800">{point.title}</span>
                </div>
              ))}
            </div>

            <ul className="space-y-5 text-lg leading-relaxed mt-5 md:mt-0 w-full">
              {points.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-start space-x-3 transition-opacity ${
                    hoveredPoint === index ? 'opacity-100' : 'opacity-70'
                  } md:${hoveredPoint === index ? 'block' : 'hidden'} block md:flex`}
                >
                  <span className="text-blue-500 font-semibold">•</span>
                  <span>
                    <strong className="text-gray-900">{point.title}:</strong> {point.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={teamRef}
        initial={{ opacity: 0, y: 50 }}
        animate={teamAnimation}
        className="container mx-auto p-4 mb-16"
      >
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
      </motion.div>

      <motion.div
        ref={valuesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesAnimation}
        className="flex flex-col items-center mb-16 rounded-xl bg-gradient-to-r from-gray-500 to-teal-400 p-10 mx-4 md:mx-10 shadow-lg"
      >
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
      </motion.div>

      <motion.div
        ref={missionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={missionAnimation}
        className="container mx-auto p-4"
      >
        <div className="bg-gradient-to-r w-full md:w-9/12 lg:w-7/12 mx-auto from-fuchsia-200 to-purple-200 rounded-lg p-6 mb-8 shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            To connect Maheshwari singles worldwide by providing a reliable, secure, and user-friendly platform that fosters meaningful relationships and lifelong partnerships.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={visionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={visionAnimation}
        className="container mx-auto p-4"
      >
        <div className="bg-gradient-to-r w-full md:w-9/12 lg:w-7/12 mx-auto from-fuchsia-200 to-purple-200 rounded-lg p-6 mb-8 shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            To be the most trusted and preferred matrimonial app for the Maheshwari community, known for our commitment to quality, integrity, and innovation.
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={joinUsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={joinUsAnimation}
        className="container mx-auto p-4"
      >
        <div className="bg-gradient-to-r w-full md:w-9/12 lg:w-7/12 mx-auto from-fuchsia-200 to-purple-200 rounded-lg p-6 mb-8 shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Us on This Journey</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            We invite you to be a part of this exciting journey. Create your profile today and let the Smart Maheshwari Matrimonial App help you find your perfect match. Together, we can make your dream of finding a life partner a reality.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            For more information and updates, follow us on our social media channels and stay connected with MisscoLpp.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
