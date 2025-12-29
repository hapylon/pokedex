import { exitCommand } from "./commandExit.js";
import { helpCommand } from "./commandHelp.js";
import { mapbCommand, mapCommand } from "./commandMap.js";
import { exploreCommand } from "./commandExplore.js";
export function getCommands() {
    return {
        exit: exitCommand,
        help: helpCommand,
        map: mapCommand,
        mapb: mapbCommand,
        explore: exploreCommand,
        // MORE COMMANDS HERE
    };
}
