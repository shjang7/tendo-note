import { savings } from './objects';
import logicUtils from './logic_utils';

const provideLogic = (() => {
  const getCurrentProject = () => {
    const ids = logicUtils.getJsonInfoFromStorage('ids');
    if (!ids) return undefined;
    return ids.projectCurrentId;
  };
  const getProjectList = () => savings.projectList;
  const getTodoListForProject = () => savings.todoListForProject;

  return { getCurrentProject, getProjectList, getTodoListForProject };
})();

export default provideLogic;
