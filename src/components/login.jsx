const Login = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className=" flex flex-col justify-around space-y-6 rounded-2xl box-shadow backdrop-blur-2xl bg-black/30 w-[90%] h-[75%] sml:h-[55%] lg:w-1/3 lg:h-[70%] py-5 px-10 mt-20 lg:mt-12 xl:py-20">
        <div className=" space-y-4">
          <label className="text-xl" htmlFor="name">
            {' '}
            Name:
          </label>
          <input
            className="h-10 w-full text-gray-300 rounded-2xl px-8 backdrop-blur-sm bg-white/30"
            placeholder="Your Full Name"
            name="name"
            type="text"
          />
        </div>
        <div className=" space-y-4">
          <label className="text-xl" htmlFor="email">
            {' '}
            Email:
          </label>
          <input
            className="h-10 w-full text-gray-300 rounded-2xl px-8 backdrop-blur-sm bg-white/30"
            placeholder="Jonh_doe@email.com"
            name="email"
            type="email"
          />
        </div>
        <div className=" space-y-4">
          <label className="text-xl" htmlFor="Password">
            {' '}
            Password:
          </label>
          <input
            className="h-10 w-full text-gray-300 rounded-2xl px-8 backdrop-blur-sm bg-white/30"
            placeholder="Create a Password"
            name="Password"
            type="text"
          />
        </div>

        <div className="flex justify-center items-center h-20 ">
          <button className="btn-bg text-xl px-7 py-2 rounded-2xl">
            {' '}
            Login in now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
