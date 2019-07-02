import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount(){
    fetch('https://newsapi.org/v2/sources?apiKey=dec65431b9ca47ee84e912af51a569fa').then((response)=>response.json()).then(rea=>console.log(rea));
  }
  render(){
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
