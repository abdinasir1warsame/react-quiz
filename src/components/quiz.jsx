import '../styles/quiz.css';
const Quiz = () => {
  return (
    <>
      <div className="flex justify-center items-center   h-screen">
        <div className="flex flex-col justify-between  rounded-2xl box-shadow backdrop-blur-2xl bg-black/30 w-2/3 h-2/3 px-5 py-4 pb-8">
          <div className="flex justify-between ">
            <div className="rounded-full btn-bg flex justify-center items-center  px-4">
              {' '}
              <p className="text-3xl font-bold text-shadow">1</p>
            </div>
            <div className="text-center  text-4xl ">
              <h1 className="">And go!</h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-center text-xl font-bold tracking-wide">
                Score: 1/5
              </p>{' '}
            </div>
          </div>
          <div className="flex flex-col gap-[55px] h-1/2 ">
            <div className="flex justify-center text-3xl py-3 ">
              <p> Which language has the most native speakers?</p>
            </div>
            <div className="flex justify-center flex-wrap h-[27%] gap-8 text-center ">
              <div className="border box-shadow questions w-1/5 rounded-2xl backdrop-blur-xs bg-white/30 content-center text-2xl">
                {' '}
                Arabic
              </div>
              <div className="border box-shadow questions w-1/5 rounded-2xl backdrop-blur-xs bg-white/30 content-center text-2xl">
                {' '}
                Arabic
              </div>
              <div className="border box-shadow questions w-1/5 rounded-2xl backdrop-blur-xs bg-white/30 content-center text-2xl">
                {' '}
                Arabic
              </div>
              <div className="border box-shadow questions w-1/5 rounded-2xl backdrop-blur-xs bg-white/30 content-center text-2xl">
                {' '}
                Arabic
              </div>
            </div>
          </div>
          <div className="flex justify-between h-12">
            <p className="w-1/3"> </p>
            <button className="btn-bg w-1/3 text-2xl rounded-2xl font-bold tracking-wide">
              Submit
            </button>

            <p className="w-1/3 text-end py-5 text-lg">
              time remaining: 30 sec
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quiz;
