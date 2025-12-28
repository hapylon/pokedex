// export function commandHelp(commands: Record<string, CLICommand>) {
//     console.log(`
// Welcome to the Pokedex!
// Usage:
// help: Displays a help message
// exit: Exit the Pokedex
// `
// )
// }
export const helpCommand = {
    name: "help",
    description: "Displays a help message",
    callback: (state) => {
        console.log(`
Welcome to the Pokedex!
Usage:
`);
        for (const name in state.commands) {
            const command = state.commands[name];
            console.log(`${command.name}: ${command.description}`);
        }
        // help: Displays a help message
        // exit: Exit the Pokedex
    }
};
