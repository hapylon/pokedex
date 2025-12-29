import { stdin, stdout } from 'node:process';
import { getCommands } from "./registry.js";
import { createInterface } from "readline";
import { PokeAPI } from './pokeapi.js';
export function initState() {
    const commands = getCommands();
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >",
        terminal: false,
    });
    const pokeApi = new PokeAPI;
    const nextLocationsURL = null;
    const prevLocationsURL = null;
    return { rl, commands, pokeApi, nextLocationsURL, prevLocationsURL };
}
