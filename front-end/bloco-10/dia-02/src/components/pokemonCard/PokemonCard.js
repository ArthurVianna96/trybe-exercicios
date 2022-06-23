import React from 'react';
import PropTypes from 'prop-types';

import './pokemonCard.css';

class PokemonCard extends React.Component {
  render() {
    const { name, type, avg_weight, sprite } = this.props;

    return (
      <div className='pokemon-card'>
        <img src={sprite} alt={`${name} sprite`} />
        <h3 className='pokemon-name'>{name}</h3>
        <p className='pokemon-type'>{type}</p>
        <p className='pokemon-weight'>{avg_weight}</p>
      </div>
    );
  }
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  avg_weight: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired
}

export default PokemonCard;