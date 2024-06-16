const Quiz = () => {
  return (
    <>
      <div className="flex justify-center items-center   h-screen">
        <div className="flex flex-col justify-between  rounded-2xl box-shadow backdrop-blur-2xl bg-black/30 w-[60%] h-2/3 px-7 py-8 pb-8">
          <div className="flex justify-between ">
            <div className="rounded-full background4 flex justify-center items-center  px-4">
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
          <div className="flex flex-col gap-[80px] h-1/2 ">
            <div className="flex justify-center text-3xl  ">
              <p> Which language has the most native speakers?</p>
            </div>
            <div className="flex justify-center flex-wrap h-[25%] gap-5 text-center ">
              <div className="border box-shadow questions w-1/5 rounded-3xl backdrop-blur-xs bg-white/30 content-center text-2xl px-10">
                {' '}
                Arabic
              </div>
              <div className="border box-shadow questions w-1/5 rounded-3xl backdrop-blur-xs bg-white/30 content-center text-2xl px-10">
                {' '}
                Arabic
              </div>
              <div className="border box-shadow questions w-1/5 rounded-3xl backdrop-blur-xs bg-white/30 content-center text-2xl px-10">
                {' '}
                Arabic
              </div>
              <div className="border box-shadow questions w-1/5 rounded-3xl backdrop-blur-xs bg-white/30 content-center text-2xl px-10">
                {' '}
                Arabic
              </div>
            </div>
          </div>
          <div className="flex justify-between h-12">
            <p className="w-1/3"> </p>
            <button className="btn-bg w-1/3 text-2xl rounded-2xl  tracking-wide">
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
