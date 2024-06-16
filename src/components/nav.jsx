import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex justify-between px-8 py-5 text-white">
        <div>
          <h1 className="text-2xl font-bold">Quiz App</h1>
        </div>
        <div className="flex gap-10 items-center text-xl">
          <Link to={'/'}>Home</Link>
          <Link to={'/quiz'}>Quiz</Link>
          <Link to={'/scores'}>My Top Scores</Link>
        </div>
        <div>
          <Link
            to={'/register'}
            className="border border-white backdrop-blur-xs text-lg  px-5 py-2 rounded-2xl"
          >
            {' '}
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
