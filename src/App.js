/*global swal*/

import React, { Component } from 'react';
import logo from './logo.svg';
import loading from './loading.svg';
import './App.css';
import Sound from 'react-sound';
import Button from './Button';

const apiToken = '<<Copiez le token de Spotify ici>>';

function shuffleArray(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = getRandomNumber(counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

/* Return a random number between 0 included and x excluded */
function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
}

class App extends Component {

  constructor() {
    super();
    this.state = {
    text: ""
  };
  }

  componentDidMount() {
    this.setState({ text: "Bonjour"})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Bienvenue sur le Blindtest</h1>
        </header>
        <div className="App-images">
          <p>Il va falloir modifier le code pour faire un vrai Blindtest !</p>
          <p>Eh ouais mon gars t'as cru qu'il te suffirait de faire git clone pour que ca marche ?</p>
          <p>Hey {this.state.text}</p>
        </div>
        <div className="App-buttons">
        </div>
      </div>
    );
  }

}

export default App;
