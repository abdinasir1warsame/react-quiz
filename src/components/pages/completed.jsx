import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const QuizCompleted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 }; // Default to 0 if no state is passed

  const [name, setName] = useState('');

  const handleSubmit = () => {
    // Create a top score object
    const topScore = {
      name,
      score,
    };

    // Get the current top scores from local storage or initialize an empty array
    const storedScores = JSON.parse(localStorage.getItem('topScores')) || [];

    // Add the new score to the list
    storedScores.push(topScore);

    // Save the updated list back to local storage
    localStorage.setItem('topScores', JSON.stringify(storedScores));

    // Optional: Clear the input field after submission
    setName('');
    navigate('/scores');
  };

  return (
    <div>
      <div className="flex justify-center h-screen w-full ">
        <div className="flex flex-col justify-between rounded-2xl box-shadow backdrop-blur-2xl bg-black/30 w-[90%] h-[60%] sml:h-[45%] lg:w-[40%] lg:h-[70%] px-10 py-10 lg:py-20 lg:px-20 mt-20">
          <div className="space-y-7">
            <div className="space-y-8">
              <div className="flex justify-center text-3xl lg:text-4xl">
                <h3>CONGRATULATIONS!!</h3>
              </div>
              <div className="flex justify-center text-xl lg:text-2xl ">
                <h2>You scored {score} out of 10</h2> {/* Use the score here */}
              </div>
            </div>
            <div className="space-y-5">
              <label className="text-xl" htmlFor="name">
                Name:
              </label>
              <input
                className="h-10 w-full text-gray-300 rounded-2xl px-8 backdrop-blur-sm bg-white/30"
                placeholder="Your Full Name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update the name state on input change
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="btn-bg px-5 text-md lg:text-2xl rounded-2xl py-2 tracking-wide"
              onClick={handleSubmit} // Call handleSubmit on button click
            >
              Submit Your Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCompleted;
