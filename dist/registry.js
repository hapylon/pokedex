import { exitCommand } from "./commandExit.js";
import { helpCommand } from "./commandHelp.js";
import { mapbCommand, mapCommand } from "./commandMap.js";
export function getCommands() {
    return {
        exit: exitCommand,
        help: helpCommand,
        map: mapCommand,
        mapb: mapbCommand,
        // MORE COMMANDS HERE
    };
}
