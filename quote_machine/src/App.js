import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      index:0,
      text:'',
      author:'',

    };
    this.handleClick  = this.handleClick.bind(this)
  }
  async componentDidMount()
  {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      this.setState({ data });
  }
  
    async handleClick()
    {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      this.setState({ data });
      const randomIndex = Math.floor(Math.random() * (this.state.data.length - 0 + 1));
      this.setState({index:randomIndex,text:data[this.state.index].text,author:data[this.state.index].author})
    }
  
  
  
render() {
    return (
      <div className='App'style={{display:'flex', alignItems:'center', height:'100vh', width:'100vw'}}>
        <div id='quote-box' style={{margin:'auto'}}>
         <p id='text'>{this.state.text}</p>
         <p id='author'>{this.state.author}</p>
         <button id='new-quote' onClick={this.handleClick}>New Quote</button>
        <a href='twitter.com/intent/tweet' id='tweet-quote'>twitter</a>
       </div>
      </div>
       

    );
  }
}

export default App;
