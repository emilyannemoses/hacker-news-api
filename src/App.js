import React from 'react';
import ListComponent from './ListComponent';
// import Search??? from './components/blahblah';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='Header'>
        {/* SEARCH FORM HERE - FORM, INPUT? */} Hello World
      </header>
      <div className='Articles'>
        <ListComponent />
      </div>
    </div>
  );
};

export default App;
