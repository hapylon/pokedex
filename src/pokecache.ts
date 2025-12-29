import { mapCommand } from "./commandMap";

export type CacheEntry<T> = {
    createdAt: number,
    val: T,

}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalID: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop();
  };

    add<T>(key: string, val: T) {
        const time = Date.now()
        const newEntry = {createdAt: time, val: val} as CacheEntry<T>
        this.#cache.set(key, newEntry)
    };

    get<T>(key: string): CacheEntry<T> | undefined {
        return this.#cache.get(key) ?? undefined;
    };

    #reap = () => {
        for (const item of this.#cache) {
            if (item[1].createdAt < Date.now() - this.#interval) {
                this.#cache.delete(item[0]);
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalID = setInterval(this.#reap, this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalID);
        this.#reapIntervalID = undefined;
    }
        
}