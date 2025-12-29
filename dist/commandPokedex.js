export const pokedexCommand = {
    name: "pokedex",
    description: "Lists the Pokemon in the user's Pokedex",
    callback: async (state, ...args) => {
        const count = Object.keys(state.pokedex).length;
        if (count < 1) {
            console.log(`you have not caught any pokemon`);
        }
        else {
            console.log("Your Pokedex:");
            for (const key in state.pokedex) {
                console.log(` - ${key}`);
            }
        }
    }
};
