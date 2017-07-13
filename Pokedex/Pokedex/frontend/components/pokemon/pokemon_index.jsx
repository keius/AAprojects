import React from 'react';
import ReactDOM from 'react-dom';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    return (
      <ul className="pokemon">
        {pokemon.map(poke => <li className="poke"> {poke.name} <img src={poke.image_url}/> </li>)};
      </ul>
    );
  }

}

export default PokemonIndex;
