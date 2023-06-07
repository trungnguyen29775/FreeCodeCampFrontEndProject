import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      expression:"",
      result:"0"
    }
    this.handleNumClick = this.handleNumClick.bind(this)
    this.handelOperationClick = this.handelOperationClick.bind(this)
    this.handleClearClick = this.handleClearClick.bind(this)
    this.handleEqualClick = this.handleEqualClick.bind(this)
    this.handleDecimalClick = this.handleDecimalClick.bind(this)
  }
  handleNumClick(event)
  {
    if(this.state.expression=="0" && event.target.id=="zero")
    {
      this.setState({expression:"0"})
    }
    else
    {
      this.setState({expression:this.state.expression+event.target.innerText})
    }

  }

  handelOperationClick(event)
  {
    this.setState({expression:this.state.expression+event.target.innerText})
  }
  handleClearClick(event)
  {
    this.setState({expression:""})
  }
  handleEqualClick(event)
  {
    const spaceTest = /\s/ig
    console.log(spaceTest.test(this.state.expression))
    const decimalTest = /.+\..\../
    if(decimalTest.test(this.state.expression))
    {
      const temp = this.state.expression.match(decimalTest)
      let result=""
      let i=0;
      for(i=0;i<this.state.expression.length;i++)
      {
        if(this.state.expression[i]==".")
          break
        result+=this.state.expression[i]
      }
      result+="."
      i+=1;
      for(i;i<this.state.expression.length;i++)
      {
        if(this.state.expression[i]!==".")
          result+=this.state.expression[i]
      }
      this.setState({expression:result})
    }
    else
    {
      this.setState({expression:eval(this.state.expression)})
    }
  } 
  handleDecimalClick()
  {
    if(this.state.expression[this.state.expression.length-1]==".")
    {
    }
    else
    {
      this.setState({expression:this.state.expression+"."})
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
        <button id='clear' onClick={this.handleClearClick}>AC</button>
        <div className='number-container'>
        <button id="zero"  onClick={this.handleNumClick}>0</button>
        <button id="one"  onClick={this.handleNumClick}>1</button>
        <button id="two"  onClick={this.handleNumClick}>2</button>
        <button id="three"  onClick={this.handleNumClick}>3</button>
        <button id="four"  onClick={this.handleNumClick}>4</button>
        <button id="five"  onClick={this.handleNumClick}>5</button>
        <button id="six"  onClick={this.handleNumClick}>6</button>
        <button id="seven"  onClick={this.handleNumClick}>7</button>
        <button id="eight"  onClick={this.handleNumClick}>8</button>
        <button id="nine"  onClick={this.handleNumClick}>9</button>
        </div>
        <div className='expression-container'>
        <div className='operator-container'>
        <button id="add"  onClick={this.handelOperationClick}>+</button>
        <button id="subtract"  onClick={this.handelOperationClick}>-</button>
        <button id="multiply" onClick={this.handelOperationClick}>*</button>
        <button id="divide" onClick={this.handelOperationClick}>/</button>
        <button id="decimal" onClick={this.handleDecimalClick}>.</button>
        </div>
        
        <button id="equals"  onClick={this.handleEqualClick}>=</button>
        </div>
        
        </div>
      </div>
    );
  }
  
}

export default App;
