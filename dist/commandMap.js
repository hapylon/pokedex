export const mapCommand = {
    name: "map",
    description: "Displays the names of 20 location areas in the Pokemon world",
    callback: async (state) => {
        const fetched = await state.pokeApi.fetchLocations(state.nextLocationsURL ?? undefined);
        for (const result of fetched.results) {
            console.log(result.name);
        }
        state.nextLocationsURL = fetched.next;
        state.prevLocationsURL = fetched.previous;
    }
};
export const mapbCommand = {
    name: "mapb",
    description: "Displays the names of the previous 20 location areas",
    callback: async (state) => {
        if (state.prevLocationsURL === undefined || state.prevLocationsURL === null) {
            console.log("you're on the first page");
            return;
        }
        else {
            const fetched = await state.pokeApi.fetchLocations(state.prevLocationsURL);
            for (const result of fetched.results) {
                console.log(result.name);
            }
            state.nextLocationsURL = fetched.next;
            state.prevLocationsURL = fetched.previous;
        }
    }
};
