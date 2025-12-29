import { Cache, CacheEntry } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #sessionCache: Cache;

  constructor(cacheInterval: number) {
    this.#sessionCache = new Cache(cacheInterval);
  };

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> { 
    const useURL = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const cached = this.#sessionCache.get<ShallowLocations>(useURL);
    if (cached) {
        return cached;
    } else {
        
        try {
            const resp = await fetch(useURL);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const locations = await resp.json();
            this.#sessionCache.add(useURL, locations);
            return locations;
        } catch (e) {
            throw new Error(`Error fetching locations: ${(e as Error).message}`);
        }
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const useURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.#sessionCache.get<Location>(useURL);
    if (cached) {
        return cached;
    } else {
        try {
            const resp = await fetch(useURL);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`)
            }
            const location = await resp.json();
            this.#sessionCache.add(useURL, location);
            return location;
        } catch (e) {
            throw new Error(`Error fetching location ${locationName}: ${(e as Error).message}`);
        }
    }
  }

  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const useURL = `${PokeAPI.baseURL}/pokemon/${pokemonName}/`;
    const cached = this.#sessionCache.get<Pokemon>(useURL);
    if (cached) {
        return cached;
    } else {
        try {
            const resp = await fetch(useURL);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`)
            }
            const pokemon = await resp.json();
            this.#sessionCache.add(useURL, pokemon);
            return pokemon;
        } catch (e) {
            throw new Error(`Error fetching pokemon ${pokemonName}: ${(e as Error).message}`)
        }
    }
  }
}



export type ShallowLocations = {
    "count": number,
    "next": string | null,
    "previous": string | null,
    "results": {"name": string, "url": string}[],
};

export type Location = {
  "id": number,
  "name": string,
  "game_index": number,
  "encounter_method_rates": unknown,
  "location": unknown,
  "names": unknown,
  "pokemon_encounters": {
    "pokemon": {
        "name": string;
        "url": string;
    };
  }[];
};

export type Pokemon = {
    "id": number,
    "name": string,
    "base_experience": number,
    "height": number,
    "is_default": boolean,
    "order": number, 
    "weight": number,

}

export type Pokedex = {
    "caught": Record<string, Pokemon>[]
}

export function joinUrl(baseUrl: string, pageUrl: string): string {
  try {
    // The constructor handles the logic: new URL(relativeUrl, baseUrl)
    const absoluteUrl = new URL(pageUrl, baseUrl);
    return absoluteUrl.href; // .href returns the full string
  } catch (error) {
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