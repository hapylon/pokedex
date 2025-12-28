import { stdin, stdout } from 'node:process';
import { State } from './state.js';

export function startREPL(state: State) {
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
    } else {
      console.log(`unknown command: ${cmd}`);
    }
    state.rl.prompt();
  });
  
  state.rl.on("close", () => {
    stdout.write("Closing the Pokedex... Goodbye!\n");
  });
}

export function cleanInput(input: string): string[] {
    return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(s => s.length > 0);
}
