// export function commandExit(commands: Record<string, CLICommand>) {
//       console.log("Closing the Pokedex... Goodbye!");
//       rl.close();
//       process.exit(0);
// }
export const exitCommand = {
    name: "exit",
    description: "Exit the Pokedex",
    callback: (state) => {
        console.log("Closing the Pokedex... Goodbye!");
        state.rl.close();
        process.exit(0);
    }
};
