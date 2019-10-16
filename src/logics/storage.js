const storage = (() => {
  const setJsonInfoToStorage = ({ sort, data }) => {
    window.localStorage.setItem(sort, JSON.stringify(data));
  };

  const appendJsonInfoToStorage = ({ sort, data }) => {
    const originalData = storage.getJsonInfoFromStorage(sort);
    const update = originalData || {};
    for (const [k, v] of Object.entries(data)) {
      update[k] = v;
    }
    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  const getJsonInfoFromStorage = (sort) => {
    if (window.localStorage.getItem(sort)) {
      return JSON.parse(window.localStorage.getItem(sort));
    }
    return undefined;
  };

  const resetJsonInfoToStorage = ({ sort, data }) => {
    const originalData = getJsonInfoFromStorage(sort);
    const update = originalData || {};
    if (update) {
      Object.keys(data).forEach(key => delete update[key]);
    }
    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  const resetStorage = () => {
    window.localStorage.clear();
  };

  return {
    setJsonInfoToStorage,
    appendJsonInfoToStorage,
    getJsonInfoFromStorage,
    resetJsonInfoToStorage,
    resetStorage,
  };
})();

export default storage;
