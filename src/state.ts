import { stdin, stdout } from 'node:process';
import { getCommands } from "./registry.js";

import { createInterface, type Interface } from "readline";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
};

export function initState(): State {
    const commands: Record<string, CLICommand> = getCommands();

    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >",
        terminal: false,
    });
    return {rl, commands};
}