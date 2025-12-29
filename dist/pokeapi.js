export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() {
    }
    ;
    async fetchLocations(pageURL) {
        const useURL = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        try {
            const data = await fetch(useURL);
            return data.json();
        }
        catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    }
    async fetchLocation(locationName) {
        const useURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        try {
            const data = await fetch(useURL);
            return data.json();
        }
        catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    }
}
export function joinUrl(baseUrl, pageUrl) {
    try {
        // The constructor handles the logic: new URL(relativeUrl, baseUrl)
        const absoluteUrl = new URL(pageUrl, baseUrl);
        return absoluteUrl.href; // .href returns the full string
    }
    catch (error) {
        console.error("Invalid URLs provided:", error);
        // Handle error appropriately, perhaps return a default or re-throw
        return "";
    }
}
// old (wrong) attempt at type ShallowLocations
//   id: number,
//   name: string,
//   game_index: number,
//   encounter_method_rates: unknown[],
//   location: unknown,
//   names: string[],
//   pokemon_encounters: unknown[],
