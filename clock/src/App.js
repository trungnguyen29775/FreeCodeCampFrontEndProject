import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state=
    {
      breakLength:"5",
      sessionLength:"25",
      label:"Session",
      time:"25"
    }
  }
  breakDecreament()
  {

  }
  breakIncreament()
  {

  }
  sessionIncreament()
  {

  }
  sessionDecreament()
  {
    
  }
  render()
  {
    return (
      <div className="App">
        <div>
        <h1 id="break-label">Break Length</h1>
      <h1 id="break-length">{this.state.breakLength}</h1>
      <button id="break-decreament">Break Decreament</button>
      <button id="break-increment">Break Increment</button>
        </div>
      <div>
      <h1 id ="session-label">Session Length</h1>
      <h1 id="session-length">{this.state.sessionLength}</h1>
      <button id="session-decreament">Session Decreament</button>
      <button id="session-increment">Session Increment</button>
      </div>
      
      <h1 id="time-label">{this.state.label}</h1>
      <h1 id="time-left">{this.state.time}</h1>
      <button id="start_loop">Start</button>
      <button id="reset">Reset</button>
      <audio id="beep" src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
      </div>
    );
  }
  
}

export default App;
