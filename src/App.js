import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
