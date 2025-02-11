const getLocalData = (key) => {
    try {
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        return undefined;
    }
};

const setLocalData = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
};

const deleteLocalData = (key) => {
    localStorage.removeItem(key);
};

const clearLocalData = () => {
    localStorage.clear();
};
