import { createLayout, createProject, createTodo } from './display/create_display';
import readDisplay from './display/read_display';
import updateDisplay from './display/update_display';
import deleteDisplay from './display/delete_display';
import utils from './display/utils';

const displayInterface = (() => {
  const addProjectGroup = projectArray => createProject.addGroup(projectArray);
  const addTodoGroup = todoArray => createTodo.addGroup(todoArray);
  const render = () => createLayout.render();

  const getFormLayout = id => readDisplay.getFormLayout(id);
  const getFormData = (form, projectId) => readDisplay.getFormData(form, projectId);
  const makeBlankForm = form => updateDisplay.makeBlankForm(form);

  const otherButtonOff = button => updateDisplay.otherButtonOff(button);
  const getDeleteButtonAll = id => readDisplay.getDeleteButtonAll(id);
  const deleteUnit = obj => deleteDisplay.deleteUnit(obj);
  const getResetButton = () => readDisplay.getResetButton();

  const getProjectList = () => updateDisplay.getProjectList();
  const updateCurrentProject = newTag => updateDisplay.updateCurrentProject(newTag);
  const currentOrLastProject = projectId => readDisplay.currentOrLastProject(projectId);
  const toggleNewForm = form => updateDisplay.toggleNewForm(form);
  const toggleCursorPointer = button => updateDisplay.toggleCursorPointer(button);

  const getDoneButtonAll = id => readDisplay.getDoneButtonAll(id);
  const toggleDone = button => updateDisplay.toggleDone(button);
  const getEditButtonAll = id => readDisplay.getEditButtonAll(id);
  const openFormToEdit = obj => updateDisplay.openFormToEdit(obj);
  const collectFormHiddenData = obj => readDisplay.collectFormHiddenData(obj);
  const getProjectsExceptCurrent = () => readDisplay.getProjectsExceptCurrent();

  const focusSet = target => utils.focusSet(target);
  const reloadScreen = () => utils.reloadScreen();
  const dynamicSetting = () => utils.dynamicSetting();

  return {
    render,
    addTodoGroup,
    addProjectGroup,
    getFormLayout,
    getFormData,
    makeBlankForm,
    otherButtonOff,
    getDeleteButtonAll,
    deleteUnit,
    getResetButton,
    getProjectList,
    updateCurrentProject,
    currentOrLastProject,
    getDoneButtonAll,
    toggleDone,
    toggleNewForm,
    toggleCursorPointer,
    getEditButtonAll,
    openFormToEdit,
    collectFormHiddenData,
    focusSet,
    reloadScreen,
    getProjectsExceptCurrent,
    dynamicSetting,
  };
})();

export default displayInterface;
