import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    quote: '',
  };

  generateQuote = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        console.log(response.data);
        const quote = response.data.value;
        this.setState({ quote });
      })
      .catch((error) => {
        console.log('Error fetching quote:', error);
      });
  };

  clearQuote = () => {
    this.setState({ quote: '' });
  };

  render() {
    return (
      <div className="container">
        <h1>Random Quote Generator</h1>
        <button onClick={this.generateQuote}>Generate Quote</button>
        <button className="botaolimpar" onClick={this.clearQuote}>Clear Quote</button>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default App;
