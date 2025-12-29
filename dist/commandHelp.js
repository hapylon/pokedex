export const helpCommand = {
    name: "help",
    description: "Displays a help message",
    callback: async (state) => {
        console.log(`
Welcome to the Pokedex!
Usage:
`);
        for (const name in state.commands) {
            const command = state.commands[name];
            console.log(`${command.name}: ${command.description}`);
        }
    }
};
