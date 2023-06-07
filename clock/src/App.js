import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state=
    {
      breakLength:5,
      sessionLength:25,
      label:true,
      time:[
        25,0
      ],
      timeState: false,
      timeRunner:Object,
    }
    this.breakDecreament = this.breakDecreament.bind(this)
    this.breakIncreament = this.breakIncreament.bind(this)
    this.sessionDecreament = this.sessionDecreament.bind(this)
    this.sessionIncreament = this.sessionIncreament.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleStart = this.handleStart.bind(this)
  }
  breakDecreament()
  {
    if(this.state.breakLength>1)
      this.setState({breakLength:this.state.breakLength-1})
    else
      this.setState({breakLength:1})
  }
  breakIncreament()
  {
    if(this.state.breakLength<60)
      this.setState({breakLength: this.state.breakLength+1})
    else
      this.setState({breakLength:60})
  }
  sessionIncreament()
  {
    if(this.state.sessionLength<60)
      this.setState({sessionLength: this.state.sessionLength+1, time: [this.state.time[0]+=1,this.state.time[1]]})
    else
      this.setState({sessionLength: 60, time:[60,0]})
  }
  sessionDecreament()
  {
    if(this.state.sessionLength>=5)
      this.setState({sessionLength: this.state.sessionLength-1, time:[this.state.time[0]-=1,this.state.time[1]]})
    else
      this.setState({sessionLength:1,time:[1,0]})
  }
  handleStart()
  {
    this.setState({timeState: !this.state.timeState},()=>
    {
      if(this.state.timeState)
      {
        this.setState({timeRunner: setInterval(()=>  
      {
        if(this.state.time[0]==0 && this.state.time[1]==0)
        {
          this.setState({label:!this.state.label, time: [this.state.breakLength,0]})
        }
        this.setState({time:[this.state.time[1]==0?this.state.time[0]==0?this.state.label?this.state.breakLength:this.state.sessionLength:this.state.time[0]-1:this.state.time[0],this.state.time[1]==0?60:this.state.time[1]-=1]})
      },1000)})
    }
      else
      {
        clearInterval(this.state.timeRunner)
        console.log("hello")
      }
    })

  }
  handleReset()
  {
    const audio = document.getElementById('beep')
    audio.pause()
    audio.currentTime = 0
    this.setState({label:true,time: [25,0],timeState:false,breakLength:5,sessionLength:25},()=>
    {
      clearInterval(this.state.timeRunner)
    })
  }
  render()
  {
    const audio = document.getElementById('beep')
    if(this.state.time[0]==0 && this.state.time[1]==0)
      audio.play()
    return (
      <div className="App">
        <div>
        <h1 id="break-label">Break Length</h1>
      <h1 id="break-length">{this.state.breakLength}</h1>
      <button id="break-decrement" onClick={this.breakDecreament}>Break Decreament</button>
      <button id="break-increment" onClick={this.breakIncreament}>Break Increment</button>
        </div>
      <div>
      <h1 id ="session-label">Session Length</h1>
      <h1 id="session-length">{this.state.sessionLength}</h1>
      <button id="session-decrement" onClick={this.sessionDecreament}>Session Decreament</button>
      <button id="session-increment" onClick={this.sessionIncreament}>Session Increment</button>
      </div>
      
      <h1 id="timer-label">{this.state.label?"Session":"Break"}</h1>
      <h1 id="time-left">{this.state.time[0]<10?"0"+this.state.time[0]:this.state.time[0]}:{this.state.time[1]<10?"0"+this.state.time[1]:this.state.time[1]}</h1>
      <button id="start_stop" onClick={this.handleStart}>Start</button>
      <button id="reset" onClick={this.handleReset}>Reset</button>
      <audio preload='auto' id="beep" src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
      </div>
    );
  }
  
}

export default App;
