import type { CLICommand, State } from "./state.js";

export const pokedexCommand: CLICommand = {
    name: "pokedex",
    description: "Lists the Pokemon in the user's Pokedex",
    callback: async (state: State, ...args: string[]) => { 
        const count = Object.keys(state.pokedex).length;
        if (count < 1) {
            console.log(`you have not caught any pokemon`);
        } else {
            console.log("Your Pokedex:");
            for (const key in state.pokedex) {
                console.log(` - ${key}`);
            }
        }
    }
}