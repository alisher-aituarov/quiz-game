import { isJSON } from './json';

export const LocalStorage: StorageService = {
    get: (key) => {
        if (typeof window === 'undefined') {
            return null;
        }
        const value = localStorage.getItem(key);
        return isJSON(value) ? JSON.parse(localStorage.getItem(key)!) : undefined;
    },
    set: (key, value) => {
        if (typeof window === 'undefined') {
            return null;
        }
        localStorage.setItem(key, JSON.stringify(value));
    },
    delete: (key) => {
        if (typeof window === 'undefined') {
            return null;
        }
        localStorage.removeItem(key);
    },
};
