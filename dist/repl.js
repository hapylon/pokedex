// import { createInterface } from 'node:readline';
// import { getCommands } from "./registry.js";
import { stdout } from 'node:process';
// const commands: Record<string, CLICommand> = getCommands();
// export const rl = createInterface({
//   input: stdin,
//   output: stdout,
//   prompt: "Pokedex >",
//   terminal: false,
// });
export function startREPL(state) {
    state.rl.prompt();
    state.rl.on('line', (line) => {
        const data = cleanInput(line);
        if (data.length < 1) {
            state.rl.prompt();
            return;
        }
        const [cmd] = data;
        const command = state.commands[cmd];
        if (command) {
            command.callback(state);
        }
        else {
            console.log(`unknown command: ${cmd}`);
        }
        state.rl.prompt();
    });
    state.rl.on("close", () => {
        stdout.write("Closing the Pokedex... Goodbye!\n");
    });
}
export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter(s => s.length > 0);
}
