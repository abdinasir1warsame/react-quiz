import { useEffect, useState } from 'react';

const TopScoresPage = () => {
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    // Retrieve and parse the scores from local storage
    const storedScores = JSON.parse(localStorage.getItem('topScores')) || [];

    // Sort the scores in descending order
    const sortedScores = storedScores.sort((a, b) => b.score - a.score);

    // Take the top 4 scores
    const topFourScores = sortedScores.slice(0, 4);

    // Update the state with the top 4 scores
    setTopScores(topFourScores);
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="flex justify-center h-screen">
      <div className="space-y-12 rounded-2xl box-shadow backdrop-blur-2xl bg-black/30 w-[90%] h-[90%] sml:h-[73%] lg:w-[40%] lg:h-[80%] py-6 px-2 lg:px-10 mt-20 lg:mt-6">
        <div className="flex justify-center text-2xl lg:text-4xl lg:pb-12">
          <h3>HIGH SCORES</h3>
        </div>
        {topScores.map((score, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-white px-2 text-xl lg:text-2xl"
          >
            <div className="flex gap-10 mb-5">
              <div className="rounded-full background4 flex justify-center items-center px-4">
                <p>{index + 1}</p> {/* Rank (1, 2, 3, 4) */}
              </div>
              <div>{score.name}</div> {/* Name of the player */}
            </div>
            <div>
              <p>{score.score} points</p> {/* Score of the player */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScoresPage;
