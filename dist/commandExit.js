export const exitCommand = {
    name: "exit",
    description: "Exit the Pokedex",
    callback: async (state, ...args) => {
        console.log("Closing the Pokedex... Goodbye!");
        state.rl.close();
        process.exit(0);
    }
};
