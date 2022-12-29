import './App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown'
import string from './string';



function App() {
  
  const [input, setInput] = React.useState(string)
  console.log(input)

  return (
    <div className="App">
      <textarea 
        autoFocus
        id='editor' 
        value={input} 
        onChange={(event)=>setInput(event.target.value)}
      />
      <div id='preview'>
        <ReactMarkdown  children={input}/>
      </div>
      

    </div>
  );
}

export default App;
