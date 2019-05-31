import React, { Component } from 'react';
import './App.css';
import StarWarsHeader from './components/StarWarsHeader';
import StarWarsList from './components/StarWarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previousPage: null,
      nextPage: null,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results,
          previousPage: data.previous,
          nextPage: data.next,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePrevious = () => {
    if (this.state.previousPage) {
      this.getCharacters(this.state.previousPage);
    }
  }

  handleNext = () => {
    if (this.state.nextPage) {
      this.getCharacters(this.state.nextPage);
    }
  }

  render() {
    return (
      <div className="App">
        <StarWarsHeader prevHandler={this.handlePrevious} nextHandler={this.handleNext} />
        <StarWarsList warItems={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
