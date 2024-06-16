const TopScoresPage = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="space-y-12 rounded-2xl box-shadow backdrop-blur-2xl bg-black/30 w-[40%] h-[80%] py-6 px-10 mt-6">
        <div className="flex justify-center text-4xl pb-12">
          <h3>HIGH SCORES</h3>
        </div>
        <div className="flex justify-between border-b border-white px-2 text-2xl ">
          <div className="flex gap-10 mb-5">
            <div className="rounded-full background4 flex justify-center items-center  px-4">
              <p>1</p>
            </div>
            <div>Abdinasir Warsame</div>
          </div>
          <div>
            {' '}
            <p>120 points</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-white px-2 text-2xl ">
          <div className="flex gap-10 mb-5">
            <div className="rounded-full background4 flex justify-center items-center  px-4">
              <p>2</p>
            </div>
            <div>Abdinasir Warsame</div>
          </div>
          <div>
            {' '}
            <p>120 points</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-white px-2 text-2xl ">
          <div className="flex gap-10 mb-5">
            <div className="rounded-full background4 flex justify-center items-center  px-4">
              <p>3</p>
            </div>
            <div>Abdinasir Warsame</div>
          </div>
          <div>
            {' '}
            <p>120 points</p>
          </div>
        </div>

        <div className="flex justify-between border-b border-white px-2 text-2xl ">
          <div className="flex gap-10 mb-5">
            <div className="rounded-full background4 flex justify-center items-center  px-4">
              <p>4</p>
            </div>
            <div>Abdinasir Warsame</div>
          </div>
          <div>
            {' '}
            <p>120 points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopScoresPage;
