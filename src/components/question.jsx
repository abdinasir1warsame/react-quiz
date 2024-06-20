import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Question = ({
  question,
  options,
  selected,
  setSelected,
  optionVariants,
}) => {
  return (
    <div className="flex flex-col gap-10 lg:gap-[70px] lg:h-1/2">
      <div className="flex justify-center text-xl lg:text-3xl text-center lg:text-start">
        <p>{question}</p>
      </div>
      <div className="lg:flex justify-center flex-wrap h-[25%] gap-5 text-center lg:space-y-0 space-y-6 px-7 lg:px-0">
        <AnimatePresence>
          {options.map((option, index) => (
            <motion.div
              key={option}
              className={
                selected === option
                  ? 'border box-shadow questions lg:w-1/5 rounded-3xl background4 content-center py-3 text-lg lg:text-2xl lg:px-0 px-10 cursor-pointer'
                  : 'border box-shadow questions lg:w-1/5 rounded-3xl backdrop-blur-xs bg-white/30 content-center py-3 text-lg lg:text-2xl lg:px-0 px-10 cursor-pointer'
              }
              onClick={() => {
                setSelected(option);
              }}
              variants={optionVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {option}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Question;
