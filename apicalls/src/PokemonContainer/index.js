import React from "react";

const PokemonContainer = (props) => {
    

    const data = Array.from(props.pokemons);

    const pokemonContainer = data.map((pokemon, i) => {
        return (
            <div>
                <li key={i}>{pokemon.name}</li>
            </div>
        )
    })
    
    return (
        <div>
            <h4>Pokemons</h4>
            <ul>
                {pokemonContainer}
            </ul>
        </div>
    )
}

export default PokemonContainer;