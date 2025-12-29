import { exitCommand } from "./commandExit.js";
import { helpCommand } from "./commandHelp.js";
import { mapbCommand, mapCommand } from "./commandMap.js";
import { exploreCommand } from "./commandExplore.js"
import { catchCommand } from "./commandCatch.js";
import { CLICommand, State } from "./state.js";
import { createInterface, type Interface } from "readline";

export function getCommands(): Record<string, CLICommand> {
    return {
       exit: exitCommand,
       help: helpCommand,
       map: mapCommand,
       mapb: mapbCommand,
       explore: exploreCommand,
       catch: catchCommand,
        // MORE COMMANDS HERE
    };
}

