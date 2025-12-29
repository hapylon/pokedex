import { exitCommand } from "./commandExit.js";
import { helpCommand } from "./commandHelp.js";
import { mapbCommand, mapCommand } from "./commandMap.js";
import { exploreCommand } from "./commandExplore.js";
import { catchCommand } from "./commandCatch.js";
import { inspectCommand } from "./commandInspect.js";
import { pokedexCommand } from "./commandPokedex.js";
export function getCommands() {
    return {
        exit: exitCommand,
        help: helpCommand,
        map: mapCommand,
        mapb: mapbCommand,
        explore: exploreCommand,
        catch: catchCommand,
        inspect: inspectCommand,
        pokedex: pokedexCommand,
        // MORE COMMANDS HERE
    };
}
