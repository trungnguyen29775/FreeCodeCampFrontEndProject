import './App.css';
import { ReactDOM } from 'react';
import React from 'react';
import { marked } from 'marked';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n ### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;}}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \nThere's also [links](https://www.freecodecamp.org), and> Block QuotesAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------Your content can | be here, and it | can be here....And here. | Okay. | I think we get it.\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels.\n- That look like this.\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, \nlet's not forget embedded images:![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
    };
    this.handleChange  = this.handleChange.bind(this)
  }

  handleChange(event)
  {
    const inlineTest = /.*\n/ig
    const spaceTest = //ig
    this.setState({input:event.target.value})
  }
  render()
  {
    const h1Test = /\#.+/ig;
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
    return (
      <div className="App">
      <textarea id="editor" value={this.state.input} onChange={this.handleChange} placeholder='Type Something'>
        </textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.input)}}></div>
      </div>
    );
  }
  
}


export default App;
