import logicUtils from './logic_utils';

const updateLogic = (() => {
  const done = (id) => {
		const sort = id.split('-')[0];
		const data = logicUtils.getJsonInfoFromStorage(sort);
		const obj = data.find(e => e.id === id);
		if (obj) obj.done = !obj.done;
		logicUtils.updateJsonInfoToStorage({ sort, data });
  };

  return { done };
})();

export default updateLogic;
