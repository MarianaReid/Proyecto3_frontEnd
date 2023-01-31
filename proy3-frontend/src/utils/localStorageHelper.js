export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const removeLocalStorage = (key) => {
    return localStorage.removeItem(key);
};