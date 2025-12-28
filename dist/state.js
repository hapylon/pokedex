import { stdin, stdout } from 'node:process';
import { getCommands } from "./registry.js";
import { createInterface } from "readline";
export function initState() {
    const commands = getCommands();
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >",
        terminal: false,
    });
    return { rl, commands };
}
