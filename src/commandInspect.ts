import type { CLICommand, State } from "./state.js";

export const inspectCommand: CLICommand = {
    name: "inspect",
    description: "Reveals the name, height, weight, stats, and type(s) of a Pokemon in the user's Pokedex",
    callback: async (state: State, ...args: string[]) => { 
        const pokemonName = args[0];
        if (!pokemonName) {
            console.log("Usage: inspect <pokemon_name>");
            return;
        }
        if (!state.pokedex[pokemonName]) {
            console.log(`you have not caught that pokemon`);
        } else {
            console.log(`Name: ${state.pokedex[pokemonName].name}`)
            console.log(`Height: ${state.pokedex[pokemonName].height}`)
            console.log(`Weight: ${state.pokedex[pokemonName].weight}`)
        }
    }
}
//Name: {state.pokedex[pokemonName].name}
//Height: {state.pokedex[pokemonName].height}
//Weight: {state.pokedex[pokemonName].weight}
// Stats:
//   -hp: state.pokedex[pokemonName].stats.hp
//   -attack: state.pokedex[pokemonName].stats[attack]
//   -defense: 
//   -special-attack: 
//   -special-defense: 
//   -speed: 
// Types:
//   - 