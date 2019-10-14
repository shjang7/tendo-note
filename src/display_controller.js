import createProject from './display/create_project';
import createTodo from './display/create_todo';
import formController from './display/form_controller';
import layout from './display/layout';
import utils from './display/utils';
import update from './display/update';
import deleteDisplay from './display/delete_display';

const displayController = (() => {
  const addProjectGroup = projectArray => createProject.addGroup(projectArray);
  const addTodoGroup = todoArray => createTodo.addGroup(todoArray);

  const getFormLayout = id => formController.getFormLayout(id);
  const getFormData = (form, projectId) => formController.getFormData(form, projectId);
  const makeBlankForm = form => formController.makeBlankForm(form);

  const getDeleteButtonAll = id => deleteDisplay.getDeleteButtonAll(id);
  const deleteUnit = button => deleteDisplay.deleteUnit(button);
  const getResetButton = () => deleteDisplay.getResetButton();

  const getProjectList = () => update.getProjectList();
  const updateCurrentProject = newTag => update.updateCurrentProject(newTag);
  const lastCurrentProject = projectId => update.lastCurrentProject(projectId);

  const getDoneButtonAll = id => update.getDoneButtonAll(id);
  const doneUnit = button => update.done(button);


  const setMainDisplay = () => {
    layout.set();
    utils.eventSet();
  };

  return {
    setMainDisplay,
    addTodoGroup,
    addProjectGroup,
    getFormLayout,
    getFormData,
    makeBlankForm,
    getDeleteButtonAll,
    deleteUnit,
    getResetButton,
    getProjectList,
    updateCurrentProject,
    lastCurrentProject,
    getDoneButtonAll,
    doneUnit,
  };
})();

export default displayController;
