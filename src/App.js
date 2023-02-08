import React, { useState, useEffect } from 'react';
// import List??? from './components/blahblah';
import SearchBar from './components/searchBar';
// import axios from 'axios';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='Header'>
        <SearchBar/>
      </header>
      <div className='Articles'>{/* LIST ARTICLES HERE - .MAP? */}</div>
    </div>
  );
};


export default App;
