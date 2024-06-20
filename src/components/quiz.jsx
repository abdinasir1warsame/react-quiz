import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from './questions-data/data.json';
import Question from './question';

const Quiz = () => {
  const { selectedCategory } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [selected, setSelected] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const navigate = useNavigate();

  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let foundQuestions = null;

        // Loop through categories to find the matching one
        for (let i = 0; i < data.categories.length; i++) {
          if (data.categories[i].name === selectedCategory) {
            foundQuestions = data.categories[i].questions;
            break; // Stop the loop once the category is found
          }
        }

        // Set the state if the questions were found
        if (foundQuestions) {
          const shuffledQuestions = shuffleArray(foundQuestions); // Shuffle questions
          const questionsWithShuffledOptions = shuffledQuestions.map((q) => ({
            ...q,
            options: shuffleArray(q.options), // Shuffle options for each question
          }));

          setQuizQuestions(questionsWithShuffledOptions);
        } else {
          console.warn(`Category ${selectedCategory} not found in data.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    if (quizQuestions.length > 0) {
      setOptions(quizQuestions[currentIndex].options);
      setQuestion(quizQuestions[currentIndex].text);
      setAnswer(quizQuestions[currentIndex].answer);
    }
  }, [quizQuestions, currentIndex]);

  // Timer effect
  useEffect(() => {
    if (timeRemaining === 0) {
      navigate('/'); // Navigate to home page if time runs out
    }

    const timer = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [timeRemaining, navigate]);

  useEffect(() => {
    // Reset timer for each new question
    setTimeRemaining(30);
  }, [currentIndex]);

  function handleNextQuestion() {
    if (selected === answer) {
      setScore(score + 1);
    } else {
      console.log('Wrong answer');
    }

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/quiz/completed', {
        state: { score: score + (selected === answer ? 1 : 0) },
      });
    }

    setSelected(''); // Reset selected option
  }

  // Define the animation variants
  const optionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggering the animations
        duration: 0.4,
      },
    }),
  };

  return (
    <>
      <div className="flex justify-center lg:items-center px-3 mt-20 lg:mt-0 h-screen">
        <div className="flex flex-col justify-between rounded-2xl box-shadow backdrop-blur-2xl bg-black/30 lg:w-[60%] h-[%] sml:h-[75%] lg:h-2/3 px-5 lg:px-7 py-8 pb-12">
          <div className="flex justify-between">
            <div className="rounded-full background4 flex justify-center items-center px-4">
              <p className="text-lg lg:text-2xl text-shadow">
                {currentIndex + 1}
              </p>
            </div>
            <div className="text-center text-2xl lg:text-4xl">
              <h1 className="">{selectedCategory}</h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center lg:text-xl font-bold tracking-wide">
                Score: {score}/10
              </p>
            </div>
          </div>

          <Question
            question={question}
            options={options}
            selected={selected}
            setSelected={setSelected}
            optionVariants={optionVariants}
          />

          <div className="flex lg:flex-row flex-col justify-between items-center h-20 lg:h-12 lg:px-0 px-7">
            <p className="w-1/3 hidden md:inline-flex"></p>
            <button
              onClick={handleNextQuestion}
              className="btn-bg lg:w-1/3 text-xl lg:text-2xl rounded-2xl lg:py-3 lg:px-0 py-3 px-5 w-full tracking-wide"
            >
              {currentIndex < quizQuestions.length - 1
                ? 'Next Question'
                : 'Finish Quiz'}
            </button>
            <p className="lg:w-1/3 text-end py-5 text-lg">
              Time remaining: {timeRemaining} sec
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
