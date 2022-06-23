import React from 'react';

import './pokedex.css';
import pokemons from '../../data/pokemons';
import PokemonCard from '../pokemonCard/PokemonCard';
import FilterButton from '../filterButton/FilterButton';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      pokemonType: 'All',
    };
    this.handleNextPokemon = this.handleNextPokemon.bind(this);
    this.handlePreviousPokemon = this.handlePreviousPokemon.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleNextPokemon(pokemonsList) {
    if (this.state.pokemonIndex === pokemonsList.length - 1) {
      this.setState({
        pokemonIndex: 0,
      });
    } else {
      this.setState(previous => ({
        pokemonIndex: previous.pokemonIndex + 1,
      }));
    }
  }

  handlePreviousPokemon(pokemonsList) {
    if (this.state.pokemonIndex === 0) {
      this.setState({
        pokemonIndex: pokemonsList.length - 1,
      });
    } else {
      this.setState(previous => ({
        pokemonIndex: previous.pokemonIndex - 1,
      }));
    }
  }

  handleFilter(filterType) {
    this.setState({
      pokemonType: filterType,
      pokemonIndex: 0,
    });
  }

  getTypesOfPokemons() {
    const types = [];
    pokemons.forEach(({ type }) => types.includes(type) ? types : types.push(type));
    return types;
  }

  render() {
    let pokemonsList = pokemons
    if (this.state.pokemonType !== 'All') {
      pokemonsList = pokemons.filter(({ type }) => type === this.state.pokemonType);
    }
    const { id, name, type, averageWeight: { value, measurementUnit }, image } = pokemonsList[this.state.pokemonIndex]

    const typesOfPokemon = this.getTypesOfPokemons();

    return (
      <>
        <section className='pokemons'>
          <button onClick={() => this.handlePreviousPokemon(pokemonsList)} disabled={pokemonsList.length === 1}>previous pokemon</button>
          <PokemonCard key={id} name={name} type={type} avg_weight={`Average weight: ${value} ${measurementUnit}`} sprite={image} />
          <button onClick={() => this.handleNextPokemon(pokemonsList)} disabled={pokemonsList.length === 1}>next pokemon</button>
        </section>
        <section className='filter-section'>
          <FilterButton callBack={() => this.handleFilter('All')} type='All' selected_type={this.state.pokemonType}/>
          {typesOfPokemon.map((type) => <FilterButton key={type} callBack={() => this.handleFilter(type)} type={type}selected_type={this.state.pokemonType}  />)}
        </section>
      </>
    )
  }
}

export default Pokedex;