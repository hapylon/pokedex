import { exitCommand } from "./commandExit.js";
import { helpCommand } from "./commandHelp.js";
import { mapbCommand, mapCommand } from "./commandMap.js";
import { exploreCommand } from "./commandExplore.js";
import { catchCommand } from "./commandCatch.js";
export function getCommands() {
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
