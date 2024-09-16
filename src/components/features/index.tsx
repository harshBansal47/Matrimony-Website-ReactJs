import { motion } from 'framer-motion';
import tabBg from '../../images/tab-bg.jpg';
import AiMatches from '../../images/screenshots/ai-matches.jpeg';
import PersonalizedPreferences from '../../images/screenshots/v.jpeg';
import Astro from '../../images/screenshots/astro.jpeg';
import Seamless from '../../images/screenshots/seamless.jpeg';
import Cp from '../../images/screenshots/cp.jpeg';

// Define animation variants
const animationVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 50,
    },
  },
};

const iconVariants = {
  hidden: { rotate: 0 },
  visible: {
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Comp1 = () => (
  <motion.div
    className="relative w-full max-w-4xl bg-white h-auto bg-opacity-90 shadow-xl rounded-xl flex flex-col lg:flex-row justify-between items-center p-6 lg:p-10"
    style={{
      backgroundImage: `url('${tabBg}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    variants={animationVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>
    <motion.div className="relative z-10 w-full lg:w-1/2 text-left p-6" variants={animationVariants}>
      <motion.h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center" variants={iconVariants}>
        <span className="mr-3">
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </span>
        Ai Based Matching 
      </motion.h1>
      <p className="text-base lg:text-lg text-gray-700 mb-4">
        Matching algorithms that works to find best suits for you
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Your preferences will be matched to find best match for you</li>
      </ul>
    </motion.div>
    <motion.div className="relative lg:w-1/2 flex justify-center lg:justify-evenly" variants={animationVariants}>
  <img
    src={Cp}
    alt="AI Matching"
    className="w-3/4 h-auto max-w-xs lg:max-w-lg rounded-lg shadow-lg z-20 overflow-hidden"
    style={{ maxHeight: '500px' }} // Adjust this value based on your requirements
  />
</motion.div>

  </motion.div>
);



// Comp2
const Comp2 = () => (
  <motion.div
    className="relative w-full max-w-4xl bg-white h-auto bg-opacity-90 shadow-xl rounded-xl flex flex-col lg:flex-row justify-between items-center p-6 lg:p-10"
    style={{
      backgroundImage: `url('${tabBg}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    variants={animationVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>
    <div className="relative z-10 w-full lg:w-1/2 text-left p-6">
      <motion.h1
        className="text-xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="mr-3">
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14" />
          </svg>
        </span>
        Astrology Integration
      </motion.h1>
      <p className="text-base lg:text-lg text-gray-700 mb-4">
        Our App automatic extract astrology data for you.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Accurate astrological Matching</li>
        <li>AI-based Astrology Gunn Matching</li>
        <li>Get Rid of Manual Matching</li>
      </ul>
    </div>
    <div className="relative lg:w-1/2 flex justify-center lg:justify-evenly">
      <img
        src={PersonalizedPreferences}
        alt="Astrology Integration"
        className="w-3/4 h-auto max-w-xs lg:max-w-lg rounded-lg shadow-lg z-20 overflow-hidden"
        style={{ maxHeight: '500px' }} // Adjust this value based on your requirements
      />
    </div>
  </motion.div>
);

// Comp3
const Comp3 = () => (
  <motion.div
    className="relative w-full max-w-4xl bg-white h-auto bg-opacity-90 shadow-xl rounded-xl flex flex-col lg:flex-row justify-between items-center p-6 lg:p-10"
    style={{
      backgroundImage: `url('${tabBg}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    variants={animationVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>
    <div className="relative z-10 w-full lg:w-1/2 text-left p-6">
      <motion.h1
        className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="mr-3">
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l7 7-7 7-7-7z" />
          </svg>
        </span>
        Exclusive to Maheshwari Community
      </motion.h1>
      <p className="text-base lg:text-lg text-gray-700 mb-4">
      Join an exclusive platform built around the values of the Maheshwari community.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>- Culturally Aligned Matches: Meet people who share your beliefs and traditions</li>
        <li>- Niche Network: A focused space for meaningful and long-lasting connections.</li>
      </ul>
    </div>
    <div className="relative lg:w-1/2 flex justify-center lg:justify-evenly">
      <img
        src={AiMatches}
        alt="Exclusive to Maheshwari Community"
        className="w-3/4 h-auto max-w-xs lg:max-w-lg rounded-lg shadow-lg z-20 overflow-hidden"
    style={{ maxHeight: '500px' }} // Adjust this value based on your requirements
      />
    </div>
  </motion.div>
);

// Comp4
const Comp4 = () => (
  <motion.div
    className="relative w-full max-w-4xl bg-white h-auto bg-opacity-90 shadow-xl rounded-xl flex flex-col lg:flex-row justify-between items-center p-6 lg:p-10"
    style={{
      backgroundImage: `url('${tabBg}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    variants={animationVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>
    <div className="relative z-10 w-full lg:w-1/2 text-left p-6">
      <motion.h1
        className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="mr-3">
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z" />
          </svg>
        </span>
        Personalize Your Matchmaking Experience
      </motion.h1>
      <p className="text-base lg:text-lg text-gray-700 mb-4">
      Filter your matches with personalized preferences like interests, values, and lifestyle choices.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>- Lifestyle Filters: Find matches based on what's most important to you.</li>
        <li>- Tailored Experience: Your matches, your way.</li>
      </ul>
    </div>
    <div className="relative lg:w-1/2 flex justify-center lg:justify-evenly">
      <img
        src={Astro}
        alt="Personalized Preferences"
        className="w-3/4 h-auto max-w-xs lg:max-w-lg rounded-lg shadow-lg z-20 overflow-hidden"
        style={{ maxHeight: '500px' }} // Adjust this value based on your requirements
      />
    </div>
  </motion.div>
);

// Comp5
const Comp5 = () => (
  <motion.div
    className="relative w-full max-w-4xl bg-white h-auto bg-opacity-90 shadow-xl rounded-xl flex flex-col lg:flex-row justify-between items-center p-6 lg:p-10 mb-20"
    style={{
      backgroundImage: `url('${tabBg}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    variants={animationVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>
    <div className="relative z-10 w-full lg:w-1/2 text-left p-6">
      <motion.h1
        className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 flex items-center"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="mr-3">
          <svg className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        Enjoy a Seamless, Stress-Free Journey
      </motion.h1>
      <p className="text-base lg:text-lg text-gray-700 mb-4">
      Our sleek, user-friendly interface ensures a smooth, guided experience from sign-up to perfect
      match.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>- Simple to Navigate: Find your match in just a few clicks.</li>
        <li>- Smart Suggestions: Personalized match recommendations that make your journey easier.</li>
      </ul>
    </div>
    <div className="relative lg:w-1/2 flex justify-center lg:justify-evenly">
      <img
        src={Seamless}
        alt="Seamless User Experience"
        className="w-3/4 h-auto max-w-xs lg:max-w-lg rounded-lg shadow-lg z-20 overflow-hidden"
        style={{ maxHeight: '500px' }} // Adjust this value based on your requirements
      />
    </div>
  </motion.div>
);


const SiteFeatures = [
  { id: 1, Component: Comp1 },
  { id: 2, Component: Comp2 },
  { id: 3, Component: Comp3 },
  { id: 4, Component: Comp4 },
  { id: 5, Component: Comp5 }
];

export default SiteFeatures;
