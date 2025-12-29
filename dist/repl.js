import { stdout } from 'node:process';
export async function startREPL(state) {
    state.rl.prompt();
    state.rl.on('line', async (line) => {
        const data = cleanInput(line);
        if (data.length < 1) {
            state.rl.prompt();
            return;
        }
        const [cmd] = data;
        const command = state.commands[cmd];
        if (command) {
            try {
                await command.callback(state);
            }
            catch (error) {
                console.error('Error executing command:', error);
            }
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
