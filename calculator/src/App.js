import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      expression:"0"
    }
    this.handleClick = this.handleClick.bind(this)
    
  }
  handleClick(event)
  {
    if(event.target.id!=="equals" && event.target.id!=="clear")
    {
      
      this.setState({expression: this.state.expression+event.target.innerText})
    }
    else if(event.target.id==="equals")
    {
      this.setState({expression: eval(this.state.expression)})
    }
    else if(event.target.id==="clear")
    {
      this.setState({expression:""})
    }
  }
  render(){
    console.log(eval( "5 - 9 + 5" ))
    return (
      <div className="App">
        <div className='calculator-container'>
        <div className='screen-container'>
        <h1 id="display">{this.state.expression!==""?this.state.expression:0}</h1>
        </div>
        <button id='clear' onClick={this.handleClick}>AC</button>
        <div className='number-container'>
        <button id="zero"  onClick={this.handleClick}>0</button>
        <button id="one"  onClick={this.handleClick}>1</button>
        <button id="two"  onClick={this.handleClick}>2</button>
        <button id="three"  onClick={this.handleClick}>3</button>
        <button id="four"  onClick={this.handleClick}>4</button>
        <button id="five"  onClick={this.handleClick}>5</button>
        <button id="six"  onClick={this.handleClick}>6</button>
        <button id="seven"  onClick={this.handleClick}>7</button>
        <button id="eight"  onClick={this.handleClick}>8</button>
        <button id="nine"  onClick={this.handleClick}>9</button>
        </div>
        <div className='expression-container'>
        <div className='operator-container'>
        <button id="add"  onClick={this.handleClick}>+</button>
        <button id="subtract"  onClick={this.handleClick}>-</button>
        <button id="multiply" onClick={this.handleClick}>*</button>
        <button id="divide" onClick={this.handleClick}>/</button>
        <button id="decimal" onClick={this.handleClick}>.</button>
        </div>
        
        <button id="equals"  onClick={this.handleClick}>=</button>
        </div>
        
        </div>
      </div>
    );
  }
  
}

export default App;
