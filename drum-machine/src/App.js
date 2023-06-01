import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      screen:'',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }
  handleClick(event)
  {
    event.target.childNodes[1].play()
    const content = event.target.innerText
    console.log(content)
    let screenValue="";
    switch (content)
    {
      case "Q":
        screenValue="Heater 1"
        break;
      case "W":
        screenValue="Heater 2"
        break
        case "E":
          screenValue="Heater 3"
          break
          case "A":
        screenValue="Heater 4"
        break
        case "S":
        screenValue="Clap"
        break
        case "D":
        screenValue="Open-HH"
        break
        case "Z":
        screenValue="Kick-n'-Hat"
        break
        case "X":
        screenValue="Kick"
        break
        case "C":
        screenValue="Closed-HH"
        break
      default:
        screenValue=""
        break
    }
    this.setState({screen:screenValue})
  }
  handlePress(event)
  {
    let key = event.key.toUpperCase()
    let element =document.getElementById(`${key}`)
    if(element!=null)
    {
      element.play()
    }
    else
      {}
    let screenValue=""
    switch (key)
    {
      case "Q":
        screenValue="Heater 1"
        break;
      case "W":
        screenValue="Heater 2"
        break
        case "E":
          screenValue="Heater 3"
          break
          case "A":
        screenValue="Heater 4"
        break
        case "S":
        screenValue="Clap"
        break
        case "D":
        screenValue="Open-HH"
        break
        case "Z":
        screenValue="Kick-n'-Hat"
        break
        case "X":
        screenValue="Kick"
        break
        case "C":
        screenValue="Closed-HH"
        break
      default:
        screenValue=""
        break
    }
    this.setState({screen:screenValue})
  }
  render()
  {
    document.addEventListener("keydown",this.handlePress)
    return (
      <div className="App">
        <div id='drum-machine'>
          <h1 id='display'>{this.state.screen}</h1>
          <button className='drum-pad' onClick={this.handleClick} id="1">Q
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip' id='Q'/>
          </button>
          <button className='drum-pad' onClick={this.handleClick} id="2">W
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className='clip' id='W'/>
          </button>
          <button className='drum-pad' onClick={this.handleClick} id="3">E
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className='clip' id='E'/></button>
          <button className='drum-pad' onClick={this.handleClick} id="4">A
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' className='clip' id='A'/></button>
          <button className='drum-pad' onClick={this.handleClick} id="5">S
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip' id='S'/></button>
          <button className='drum-pad' onClick={this.handleClick} id="6">D
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className='clip' id='D'/></button>
          <button className='drum-pad' onClick={this.handleClick} id="7">Z
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip' id='Z'/></button>
          <button className='drum-pad' onClick={this.handleClick} id="8">X
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip' id='X'/></button>
          <button className='drum-pad' onClick={this.handleClick} id="9">C
          <audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip' id='C'/></button>

        </div>
      </div>
    );
  }
  
}

export default App;
