import type { CLICommand, State } from "./state.js";

export const helpCommand: CLICommand = {
    name: "help",
    description: "Displays a help message",
    callback: (state: State) => {
        console.log(`
Welcome to the Pokedex!
Usage:
`
        )
        for (const name in state.commands) {
            const command = state.commands[name];
            console.log(`${command.name}: ${command.description}`);
        }
    }
}