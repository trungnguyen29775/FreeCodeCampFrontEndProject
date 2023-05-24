import './App.css';
import { ReactDOM } from 'react';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''

    };
    this.handleChange  = this.handleChange.bind(this)
  }
  handleChange(event)
  {
    const h1Test = /\#.+/g;
    const h2Test = /\#\#.+/g;
    const h3Test = /\#\#\#.+/g;
    const codeTest = /\`\`\`(.)*\`\`\`/ig
    const boldTest = /\*\*(.)*\*\*/ig
    const italicTest = /\_(.)*\_/ig
    const italicBoldTest = /\*\*\_(.)*\_\*\*/ig
    const crossTest = /\~\~(.)*\~\~/ig
    const linkTest = /\[(.)+\]/ig
    const tHeadTest = /(.)+\|/ig
    const tHeadSubTest = /\-\-\-\-\-\-\-\-\-\-\-\- \|/g
    const tRowTest = /(.)+\|/ig
    const ulTest = /\- /g
    const olTest=/\[0-9]+\. /g
    const imageTest = /\!\[(.)+\]\((.)+\)/ig
    this.setState({input:event.target.value},()=>
    {
      const inputString = this.state.input;
      if(h1Test.test(inputString))
      {
        const h1Array = inputString.match(h1Test)
        h1Array.map((item,key)=>
        {
          const h1Element = <h1 key={key}>{item.slice(1,item.length)}</h1>
          ReactDOM.render(h1Element,document.getElementById('preview'))
        })
        
      }
    })
    

  }
  render()
  {
    return (
      <div className="App">
      <textarea id="editor" value={this.state.input} onChange={this.handleChange} placeholder='Type Something'>
        </textarea>
      <div id="preview"></div>
      <div>
        {
  
        }
      </div>
      </div>
    );
  }
  
}


export default App;
