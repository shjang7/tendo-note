import createProject from './logics/create_project';
import createTodo from './logics/create_todo';
import provideLogic from './logics/provide_logic';
import deleteLogic from './logics/delete_logic';
import updateLogic from './logics/update_logic';

const logicController = (() => {
  const addProjectList = data => createProject.addProjectList(data);
  const addTodoList = data => createTodo.addTodoList(data);
  const updateTodoListForProject = id => createTodo.setTodoListForProject(id);

  const getCurrentProject = () => provideLogic.getCurrentProject();
  const getProjectList = () => provideLogic.getProjectList();
  const getTodoListForProject = () => provideLogic.getTodoListForProject();

  const deleteUnit = id => deleteLogic.deleteUnit(id);
  const resetAll = () => deleteLogic.resetAll();

  const doneUnit = id => updateLogic.done(id);

  const set = () => {
    createProject.setDefaultProject();
    createTodo.setDefaultTodo();
    createProject.setInfoFromStorage();
    createTodo.setInfoFromStorage();
  };

  return {
    set,
    addProjectList,
    addTodoList,
    getProjectList,
    getTodoListForProject,
    updateTodoListForProject,
    deleteUnit,
    doneUnit,
    getCurrentProject,
    resetAll,
  };
})();

export default logicController;
