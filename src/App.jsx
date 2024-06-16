import React from 'react';
import './App.css';
import Quiz from './components/quiz';
import Navbar from './components/nav';
// import Banner from './components/banner';

function App() {
  return (
    <div className=" h-full w-screen background3 ">
      <Navbar />
      {/* <Banner /> */}
      <Quiz />
    </div>
  );
}

export default App;
