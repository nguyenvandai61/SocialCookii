import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  addHashtag = async () => {
    console.log("add part")
    let body = {
      hashtagName: "fish"
    }
    return await fetch("http://localhost:5000/api/hashtag", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json()
          .then(data => {
            console.log(data);
            return data;
          })
      });
  }
  render() {
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
