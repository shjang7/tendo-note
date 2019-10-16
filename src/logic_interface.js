import { createProject, createTodo, mainCreate } from './logics/create_logic';
import readLogic from './logics/read_logic';
import deleteLogic from './logics/delete_logic';
import updateLogic from './logics/update_logic';
import storage from './logics/storage';

const logicInterface = (() => {
  const addProjectList = data => createProject.addProjectList(data);
  const addTodoList = data => createTodo.addTodoList(data);
  const updateTodoListForProject = id => createTodo.setTodoListForProject(id);

  const getCurrentProject = () => readLogic.getCurrentProject();
  const getProjectList = () => readLogic.getProjectList();
  const getTodoListForProject = () => readLogic.getTodoListForProject();

  const deleteUnit = id => deleteLogic.deleteUnit(id);
  const resetStorage = () => storage.resetStorage();

  const fillInData = data => updateLogic.fillInData(data);
  const doneUnit = id => updateLogic.doneUnit(id);
  const updateUnit = obj => updateLogic.updateUnit(obj);

  const setInit = () => mainCreate.setInit();

  return {
    setInit,
    addProjectList,
    addTodoList,
    getCurrentProject,
    resetStorage,
    getProjectList,
    getTodoListForProject,
    updateTodoListForProject,
    deleteUnit,
    fillInData,
    doneUnit,
    updateUnit,
  };
})();

export default logicInterface;
