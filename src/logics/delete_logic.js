import logicUtils from './logic_utils';

const deleteLogic = (() => {
  const deleteUnit = (id) => {
		const sort = id.split('-')[0];
		const data = logicUtils.getJsonInfoFromStorage(sort);
		const updated = (data ? data.filter(e => e.id !== id) : []);
		logicUtils.updateJsonInfoToStorage({ sort, data:updated });
  };

  const resetAll = () => {
    window.localStorage.clear();
  };

  return { deleteUnit, resetAll };
})();

export default deleteLogic;

