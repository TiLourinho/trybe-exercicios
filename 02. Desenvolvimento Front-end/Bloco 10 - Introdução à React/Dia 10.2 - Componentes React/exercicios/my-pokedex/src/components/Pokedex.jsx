import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokedex'>
        {pokemons.map(elem => <Pokemon key={elem.id} pokemon={elem} />)}
      </div>
    );
  };
};

export default Pokedex;