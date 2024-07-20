import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import DownloadImage from '../images/download.png';
import IosImage from '../images/ioslog.png';
import Androidlogo from '../images/androidlogo.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Loading from '../utilities/loading'; // Ensure the path is correct
import { FaRegIdBadge } from 'react-icons/fa';
import { BiHeart, BiComment } from 'react-icons/bi';
import image1 from '../images/img1.webp';
import image2 from '../images/img2.webp';
import image3 from '../images/img3.webp';
import image4 from '../images/1720735025373.png';
import image5 from '../images/1720735025392.png';
import image6 from '../images/1720735025409.png';
import image7 from '../images/1720735025419.png';
import image8 from '../images/1720735025429.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const images = [
  { src: image4, alt: 'Character Matching' },
  { src: image5, alt: 'Gunn Matching' },
  { src: image6, alt: 'Preference Matching' },
  { src: image7, alt: 'Match Matching' },
  { src: image8, alt: 'Smart Maheshwari Matrimonial App' },
];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change this duration to your loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pt-[70px] min-h-screen border-wrapper">
      <motion.div
        className="min-h-screen bg-cover bg-center relative z-0"
        style={{
          backgroundImage: `url(${require('../images/mainbg.jpg')})`,
          backgroundAttachment: 'fixed', // Add fixed background attachment
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlay */}
        <div className="absolute w-full inset-0 z-10 bg-black bg-opacity-70"></div>

        <motion.div
          className="min-h-screen flex flex-col items-center justify-center text-center text-white relative z-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text shadow-lg">
            Welcome to Smart Maheshwari Matrimonial App
          </h1>
          <p className="text-lg md:text-xl mb-4 gradient-text shadow-md">
            Connecting hearts, building futures.
          </p>
          <Link to="/contact">
            <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
              Get Started
            </button>
          </Link>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-center space-x-4">
              {[image1, image2, image3].map((img, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img}
                    alt=''
                    className="w-24 h-24 rounded-full shadow-lg"
                  />
                  <div
                    className="absolute inset-0 border-4 rounded-xl transform rotate-6 group-hover:rotate-0 transition duration-300"
                    style={{ borderColor: ['#3b82f6', '#ef4444', '#10b981'][index] }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center p-6 my-10 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Find Your <span className="text-pink-500">Special</span> Someone
          </h2>
        </div>
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          {[
            { icon: FaRegIdBadge, title: 'Register', text: 'Sign up for free and create your profile.' },
            { icon: BiHeart, title: 'Connect', text: 'Find and connect with your matches.' },
            { icon: BiComment, title: 'Interact', text: 'Start a conversation and build a relationship.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`w-16 h-16 mb-4 flex items-center justify-center text-white rounded-full`}
                style={{ backgroundColor: ['#3b82f6', '#10b981', '#ef4444'][index] }}
              >
                <feature.icon className="w-8 h-8 font-bold" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="min-h-screen bg-gray-100 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <header className="bg-fuchsia-800 text-white text-center py-6 mb-8">
          <h1 className="text-3xl font-bold">Discover Our Standout Features</h1>
        </header>
        <section className="carousel mx-auto w-11/12 md:w-8/12">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000 }}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex items-center justify-center w-full h-[450px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full object-contain"
                    width={800}
                    height={600}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </motion.div>

      <motion.div
        className="relative w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 lg:p-12 mt-12 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, #f0f0f0 0%, #f0f0f0 100%)',
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(192, 192, 192, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 100%',
            zIndex: 0,
          }}
        ></div>
        <div className="relative flex flex-col items-center text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 z-10">
            Download Our App
          </h1>
          <hr className="w-24 border-b-4 border-gray-800 mb-4 z-10" />
        </div>
        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:space-x-8 z-10">
          <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/2">
            <img
              src={DownloadImage}
              alt="Download Illustration"
              className="w-full h-auto max-w-md lg:max-w-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-1/2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300"
            >
              <img
                src={Androidlogo}
                alt="Download on Google Play"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4"
              />
              <span className="text-lg font-semibold text-gray-800">
                Download for Android
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-shadow bg-gradient-to-r from-gray-100 to-gray-400 hover:from-gray-200 hover:to-gray-500"
            >
              <img
                src={IosImage}
                alt="Download on the App Store"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4"
              />
              <span className="text-lg font-semibold text-gray-800">
                Download for iOS
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
