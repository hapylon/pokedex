import { exitCommand } from "./commandExit.js";
import { helpCommand } from "./commandHelp.js";
import { mapCommand } from "./commandMap.js";
import { CLICommand, State } from "./state.js";
import { createInterface, type Interface } from "readline";

export function getCommands(): Record<string, CLICommand> {
    return {
       exit: exitCommand,
       help: helpCommand,
       map: mapCommand,
        // MORE COMMANDS HERE
    };
}

