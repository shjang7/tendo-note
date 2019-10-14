const logicUtils = (() => {
  const getJsonInfoFromStorage = (sort) => {
    if (window.localStorage.getItem(sort)) {
      return JSON.parse(window.localStorage.getItem(sort));
    }
    return undefined;
  };

  const updateJsonInfoToStorage = ({ sort, data }) => {
    window.localStorage.setItem(sort, JSON.stringify(data));
  };

  const addJsonInfoToStorage = ({ sort, data }) => {
    const originalData = getJsonInfoFromStorage(sort);
    const update = originalData || {};
    for (const [k, v] of Object.entries(data)) {
      update[k] = v;
    }
    window.localStorage.setItem(sort, JSON.stringify(update));
  };

  const getNewId = (sort) => {
    const data = {};
    let id;
    if (getJsonInfoFromStorage('ids') && getJsonInfoFromStorage('ids')[`${sort}LastId`]) {
      id = getJsonInfoFromStorage('ids')[`${sort}LastId`];
      const newNumber = Number(id.split('-')[1]) + 1;
      id = `${sort}-${newNumber}`;
    } else {
      id = `${sort}-1`;
    }
    data[`${sort}LastId`] = id;
    data[`${sort}CurrentId`] = id;
    addJsonInfoToStorage({ sort: 'ids', data });
    return id;
  };

  return {
    getJsonInfoFromStorage,
    updateJsonInfoToStorage,
    getNewId,
    addJsonInfoToStorage,
  };
})();

export default logicUtils;
