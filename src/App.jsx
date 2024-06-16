import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import IndexPage from './components/pages/indexPage';
import QuizPage from './components/pages/quizPage';
import LoginPage from './components/pages/loginpage';
import RegisterPage from './components/pages/registerPage';
import TopScoresPage from './components/pages/topScoresPage';

function App() {
  return (
    <div className=" h-full w-screen background4 ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/quiz" element={<QuizPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/scores" element={<TopScoresPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
