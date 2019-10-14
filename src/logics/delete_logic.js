import logicUtils from './logic_utils';

const deleteLogic = (() => {
  const deleteUnit = (id) => {
    // id: 'to-1'
    // getJsonInfoFromStorage, updateJsonInfoToStorage
  };

  const resetAll = () => {
    window.localStorage.clear();
  };

  return { deleteUnit, resetAll };
})();

export default deleteLogic;
