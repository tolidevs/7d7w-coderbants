import React from 'react';
import GetJoke from './GetJoke'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1 id="mainheader">#CoderBants!</h1>
        <h2 id="subheader">Hit the button to see a hilarious* dev joke!</h2>
        <div className="jokebox">
          <GetJoke />

        </div>
        <footer>*Disclaimer, hilarity cannot be guaranteed</footer>
      </div>
    </div>
  );
}

export default App;
