import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Newsfeed from './Components/Newsfeed/Newsfeed';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Newsfeed></Newsfeed>
    </div>
  );
}

export default App;
