import { savings } from './objects';
import storage from './storage';
import readLogic from './read_logic';

const updateLogic = (() => {
  const doneUnit = (id) => {
    const sort = id.split('-')[0];
    const data = storage.getJsonInfoFromStorage(sort);
    const obj = data.find(e => e.id === id);
    if (obj) obj.done = !obj.done;
    savings[`${sort}List`] = data;
    storage.setJsonInfoToStorage({ sort, data });
  };

  const fillInData = ({ data }) => {
    if (!data.id) return;
    const idSet = data.id.split('-');
    const sort = idSet[0];
    if (sort === 'todo') {
      data.projectId = readLogic.getCurrentProject();
    }
  };

  const updateUnit = ({ id, data }) => {
    const sort = id.split('-')[0];
    const updatingData = storage.getJsonInfoFromStorage(sort);
    const obj = updatingData.find(e => e.id === id);
    updatingData.splice(updatingData.indexOf(obj), 1, data);
    savings[`${sort}List`] = updatingData;
    storage.setJsonInfoToStorage({ sort, data: updatingData });
  };

  return { doneUnit, updateUnit, fillInData };
})();

export default updateLogic;
