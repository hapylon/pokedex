import type { CLICommand, State } from "./state.js";

export const exitCommand: CLICommand = {
      name: "exit",
      description: "Exit the Pokedex",
      callback: async (state: State) => {
            console.log("Closing the Pokedex... Goodbye!");
            state.rl.close();
            process.exit(0);
      }
}