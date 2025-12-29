import type { CLICommand, State } from "./state.js";

export const exploreCommand: CLICommand = {
    name: "explore",
    description: "Displays the Pokemon findable in a specified location area",
    callback: async (state: State, ...args: string[]) => { //Promise<void>
        const locationName = args[0];
        if (!locationName) {
            console.log("Usage: explore <location-area-name>");
            return;
        }
        const fetched = await state.pokeApi.fetchLocation(locationName);
        for (const item of fetched.pokemon_encounters) {
            console.log(item.pokemon.name);
        }
    }
}