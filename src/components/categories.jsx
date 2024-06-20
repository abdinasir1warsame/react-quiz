import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPalette,
  FaFlask,
  FaFootballBall,
  FaGlobeAmericas,
  FaHeartbeat,
} from 'react-icons/fa';
import { GiCalculator, GiGreekTemple, GiAncientColumns } from 'react-icons/gi';

const Categories = ({ onCategorySelect }) => {
  const categories = [
    { name: 'Art', icon: <FaPalette className="text-2xl lg:text-4xl" /> },
    { name: 'Science', icon: <FaFlask className="text-2xl lg:text-4xl" /> },
    { name: 'Maths', icon: <GiCalculator className="text-2xl lg:text-4xl" /> },
    {
      name: 'Sports',
      icon: <FaFootballBall className="text-2xl lg:text-4xl" />,
    },
    {
      name: 'History',
      icon: <GiGreekTemple className="text-2xl lg:text-4xl" />,
    },
    {
      name: 'Geography',
      icon: <FaGlobeAmericas className="text-2xl lg:text-4xl" />,
    },
    {
      name: 'Culture',
      icon: <GiAncientColumns className="text-2xl lg:text-4xl" />,
    },
    { name: 'Health', icon: <FaHeartbeat className="text-2xl lg:text-4xl" /> },
  ];

  const [selected, setSelected] = useState('');

  // Define the animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // delay based on the index
      },
    }),
  };

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center lg:py-12 lg:px-2">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          className={
            selected === category.name
              ? 'space-y-3 btn-bg box-shadow p-3 rounded-2xl text-xl text-center w-1/3 lg:w-1/5 scale-105 transform transition duration-300 cursor-pointer'
              : 'space-y-3 backdrop-blur-xs bg-white/30 box-shadow p-3 rounded-2xl lg:text-xl text-center w-1/3 lg:w-1/5 cursor-pointer px-3'
          }
          onClick={() => {
            setSelected(category.name); // Update local state
            onCategorySelect(category.name); // Notify parent component
          }}
          custom={index} // Pass the index to the variant
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <div className="flex justify-center">{category.icon}</div>
          <p>{category.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Categories;
