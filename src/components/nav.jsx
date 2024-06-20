import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar w-full h-20  sticky top-0 z-50 backdrop-blur-2xl   mx-auto flex justify-between items-center font-titleFont  px-4">
        <div className="w-1/3">
          <Link to={'/'} className="text-2xl sm:pt-3 lg:pt-0 font-bold">
            Quiz App
          </Link>
        </div>
        <div className="w-1/3 hidden mdl:inline-flex flex justify-center">
          <Link className="text-2xl text-white" to={'/scores'}>
            My Top Scores
          </Link>
        </div>

        <div className="flex justify-end w-1/3">
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-8">
            <Link
              to={'/login'}
              className="border border-white backdrop-blur-xs text-lg  px-5 py-2 rounded-2xl"
            >
              {' '}
              Login
            </Link>
            <Link
              to={'/register'}
              className=" border border-white backdrop-blur-xs text-lg  px-5 py-2 rounded-2xl"
            >
              {' '}
              Sign Up
            </Link>
          </ul>
          <Link
            to={'/register'}
            className=" lg:hidden border border-white backdrop-blur-xs text-lg  px-5 py-2 rounded-2xl"
          >
            {' '}
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
