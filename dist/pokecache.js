export class Cache {
    #cache = new Map();
    #reapIntervalID = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    ;
    add(key, val) {
        const time = Date.now();
        const newEntry = { createdAt: time, val: val };
        this.#cache.set(key, newEntry);
    }
    ;
    get(key) {
        return this.#cache.get(key) ?? undefined;
    }
    ;
    #reap = () => {
        for (const item of this.#cache) {
            if (item[1].createdAt < Date.now() - this.#interval) {
                this.#cache.delete(item[0]);
            }
        }
    };
    #startReapLoop() {
        this.#reapIntervalID = setInterval(this.#reap, this.#interval);
    }
    stopReapLoop() {
        clearInterval(this.#reapIntervalID);
        this.#reapIntervalID = undefined;
    }
}
