import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    #sessionCache;
    constructor(cacheInterval) {
        this.#sessionCache = new Cache(cacheInterval);
    }
    ;
    async fetchLocations(pageURL) {
        const useURL = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        const cached = this.#sessionCache.get(useURL);
        if (cached) {
            return cached;
        }
        else {
            try {
                const resp = await fetch(useURL);
                if (!resp.ok) {
                    throw new Error(`${resp.status} ${resp.statusText}`);
                }
                const locations = await resp.json();
                this.#sessionCache.add(useURL, locations);
                return locations;
            }
            catch (e) {
                throw new Error(`Error fetching locations: ${e.message}`);
            }
        }
    }
    async fetchLocation(locationName) {
        const useURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        const cached = this.#sessionCache.get(useURL);
        if (cached) {
            return cached;
        }
        else {
            try {
                const resp = await fetch(useURL);
                if (!resp.ok) {
                    throw new Error(`${resp.status} ${resp.statusText}`);
                }
                const location = await resp.json();
                this.#sessionCache.add(useURL, location);
                return location;
            }
            catch (e) {
                throw new Error(`Error fetching location ${locationName}: ${e.message}`);
            }
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
