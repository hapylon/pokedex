import { exitCommand } from "./commandExit.js";
import { helpCommand } from "./commandHelp.js";
export function getCommands() {
    return {
        exit: exitCommand,
        help: helpCommand,
        // MORE COMMANDS HERE
    };
}
//  exit: {
//             name: "exit",
//             description: "Exits the pokedex",
//             callback: exitCommand,
//         },
//         help: {
//             name: "help",
//             description: "it's used all the time for help",
//             callback: helpCommand,
//         },
