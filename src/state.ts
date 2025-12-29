import { stdin, stdout } from 'node:process';
import { getCommands } from "./registry.js";

import { createInterface, type Interface } from "readline";
import { PokeAPI } from './pokeapi.js';

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
};

export function initState(): State {
    const commands: Record<string, CLICommand> = getCommands();

    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >",
        terminal: false,
    });

    const pokeApi = new PokeAPI;
    const nextLocationsURL = null;
    const prevLocationsURL = null;
    
    return {rl, commands, pokeApi, nextLocationsURL, prevLocationsURL};
}