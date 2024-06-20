import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Categories from './categories';

const Banner = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleCategorySelect(categoryName) {
    setSelectedCategory(categoryName);
  }

  const handleGetStarted = () => {
    if (!selectedCategory) {
      setErrorMessage('Please select a category before starting the quiz!');
    } else {
      setErrorMessage('');
    }
  };

  // Define the animation variants
  const bannerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:h-screen items-center text-white lg:py-20 pb-10 mt-6">
        <div className="space-y-8 lg:space-y-12 w-[90%] h-2/3 lg:items-center px-8 ml-5">
          {/* Main Heading */}
          <motion.div
            className="text-4xl lg:text-7xl items-center text-center lg:text-start"
            initial="hidden"
            animate="visible"
            variants={bannerVariants}
          >
            Unleash Your Inner Wizard of Wisdom
          </motion.div>
          {/* Subheading */}
          <motion.div
            className="text-sm text-center lg:text-start lg:text-xl"
            initial="hidden"
            animate="visible"
            variants={subheadingVariants}
          >
            Embark on a Journey Of Knowledge Exploration with Our Extensive
            Collection Of Interactive Quizzes
          </motion.div>
          {/* Error Message and Button */}
          <div className="space-y-10">
            <div className="text-red-300 font-bold text-xl text-center">
              {errorMessage}
            </div>
            <motion.div
              className="flex gap-10 justify-center text-center"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <Link
                to={selectedCategory ? `/quiz/${selectedCategory}` : '/'}
                onClick={handleGetStarted}
                className="w-1/2 lg:w-1/3 h-12 btn-bg px-5 py-3 lg:text-xl rounded-3xl"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-[96%] h-2/3 mr-8">
          <div className="flex justify-center items-center mb-7 mt-4 lg:mt-0 lg:mb-0">
            {/* Question Heading */}
            <motion.h2
              className="text-md lg:text-2xl w-2/3 text-center"
              initial="hidden"
              animate="visible"
              variants={subheadingVariants}
            >
              HI! CHOOSE THE TOPIC YOU ARE INTERESTED IN?
            </motion.h2>
          </div>
          <Categories onCategorySelect={handleCategorySelect} />
        </div>
      </div>
    </>
  );
};

export default Banner;
