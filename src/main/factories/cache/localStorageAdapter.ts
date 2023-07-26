import { LocalStorageAdapter } from "../../../infra/cache/localStorageAdapter";

export const makeLocalStorageAdapter = (): LocalStorageAdapter =>
    new LocalStorageAdapter();
