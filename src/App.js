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
      <div>
        <div className="container">
          <h1>Chuck Norris Quotes</h1>
          <div className="button-container">
            <button onClick={this.generateQuote}>Generate Quote</button>
            <button className="botaolimpar" onClick={this.clearQuote}>Clear Quote</button>
          </div>
          <h3>{this.state.quote}</h3>
        </div>
        <div className="footer">
          Developed by Caroline Fabri 2023
        </div>
      </div>
    );
  }
}

export default App;