export const catchCommand = {
    name: "catch",
    description: "Tries to catch a Pokemon and add it to the user's Pokedex",
    callback: async (state, ...args) => {
        const pokemonName = args[0];
        if (!pokemonName) {
            console.log("Usage: catch <pokemon_name>");
            return;
        }
        console.log(`Throwing a Pokeball at ${pokemonName}...`);
        const fetched = await state.pokeApi.fetchPokemon(pokemonName);
        const outcome = Math.floor(Math.random() * 2);
        if (outcome === 1) {
            console.log(`${pokemonName} was caught!`);
            state.pokedex[pokemonName] = fetched;
        }
        else {
            console.log(`${pokemonName} escaped!`);
            return;
        }
    }
};
