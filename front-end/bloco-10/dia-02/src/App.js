import React from 'react';

import pokemonLogo from './assets/pokemon-logo.png';
import './App.css';
import Pokedex from './components/pokedex/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        <header>
          <img src={pokemonLogo} alt='pokemon' />
        </header>
        <Pokedex />
      </div>
    )
  }
}

export default App;
