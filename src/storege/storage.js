export const getLocalData = (key) => {
    try {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        return undefined;
    }
};

export const setLocalData = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
};

export const deleteLocalData = (key) => {
    localStorage.removeItem(key);
};

export const clearLocalData = () => {
    localStorage.clear();
};
