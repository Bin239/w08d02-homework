import React, { Component } from 'react';
import './App.css';
import PokemonContainer from "./PokemonContainer/index"
//import Login from "./Login/Login"

class App extends Component {
    constructor(){
      super();

      this.state = {
        pokemons : [],
        loading: true
      }


    }

    componentDidMount(){
      this.getPokemon()
    }


    getPokemon = async () =>{
      
      try {
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon");

        if (!response.ok) {
            throw Error (response.statusText);
        }
        const PokemonsParsed = await response.json();

        this.setState ({
                pokemons: PokemonsParsed,
                loading: false,
                
        })

        console.log(this.getPokemon)
        

    } catch (err){
        console.log(err);
        return err
    }
    }


  render() {
    return (
      <div className="App">
            
            {this.state.loading ? <span>Loading....</span>: <PokemonContainer pokemons = {this.state.pokemons}/>}
      </div>
    );
  }
}

export default App;
