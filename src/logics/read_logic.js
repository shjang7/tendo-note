import { savings } from './objects';
import storage from './storage';

const readLogic = (() => {
  const getCurrentProject = () => {
    const ids = storage.getJsonInfoFromStorage('ids');
    if (!ids) return undefined;
    return ids.projectCurrentId;
  };
  const getProjectList = () => savings.projectList;
  const getTodoListForProject = () => savings.todoListForProject;

  return {
    getCurrentProject, getProjectList, getTodoListForProject,
  };
})();

export default readLogic;
