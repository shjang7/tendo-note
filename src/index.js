import displayController from './display_controller';
import logicController from './logic_controller';

const interfaceMain = (() => {
  const projectSetting = () => {
    const projectArray = logicController.getProjectList();
    displayController.addProjectGroup(projectArray);
  };

  const todoSetting = () => {
    const todoArray = logicController.getTodoListForProject();
    displayController.addTodoGroup(todoArray);
  };

  const updateCurrentProject = (btn) => {
    const projectId = displayController.updateCurrentProject(btn);
    logicController.updateTodoListForProject(projectId);
    todoSetting();
  };

  const submitFormProject = (form) => {
    const data = displayController.getFormData(form);
    logicController.addProjectList(data);
  };

  const submitFormTodo = (form) => {
    const projectId = logicController.getCurrentProject();
    const data = displayController.getFormData(form, projectId);
    logicController.addTodoList(data);
  };

  const setInitialCurrentProject = () => {
    const projectId = logicController.getCurrentProject();
    if (projectId) {
      const lastProject = displayController.lastCurrentProject(projectId);
      if (lastProject) updateCurrentProject(lastProject);
    }
  };

  const afterSubmission = (form) => {
    displayController.makeBlankForm(form);
    window.location.reload();
  };

  const init = () => {
    logicController.set();
    displayController.setMainDisplay();
    projectSetting();
    setInitialCurrentProject();
  };

  const formSubmissionEvent = (form, sort) => {
    form.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        if (sort === 'project') submitFormProject(form);
        if (sort === 'todo') submitFormTodo(form);
        afterSubmission(form);
      }
    });
  };

  const projectSwitchEvent = () => {
    const buttons = displayController.getProjectList();
    if (buttons.length > 0) {
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          updateCurrentProject(button);
          window.location.reload();
        });
      });
    }
  };

  const deleteUnit = (button) => {
		const id = displayController.deleteUnit(button);
		logicController.deleteUnit(id);
  };

  const deleteEvent = (word) => {
		const deleteAllButton = displayController.getDeleteButtonAll(word);
		deleteAllButton.forEach((deleteBtn) => {
			deleteBtn.addEventListener('click', () =>{
				deleteUnit(deleteBtn);
			});
		});
  };

  const doneUnit = (button) => {
		const id = displayController.doneUnit(button);
		logicController.doneUnit(id);
  };

  const doneEvent = (word) => {
		const doneAllBtn = displayController.getDoneButtonAll(word);
		doneAllBtn.forEach((doneBtn) => {
			doneBtn.addEventListener('click', () => {
				doneUnit(doneBtn);
			});
		});
  };

  const programResetEvent = () => {
    const resetBtn = displayController.getResetButton();
    resetBtn.addEventListener('click', () => {
      logicController.resetAll();
      window.location.reload();
    });
  };

  const createEvents = (word) => {
    const { form } = displayController.getFormLayout(word);
    // const { form, open } = displayController.getFormLayout(word);
    formSubmissionEvent(form, word);
    if (word === 'todo') {
      deleteEvent(word);
      doneEvent(word);
    }
    if (word === 'project') {
      projectSwitchEvent();
      programResetEvent();
    }
  };

  const start = () => {
    init();
    ['project', 'todo'].forEach(word => createEvents(word));
  };

  return { start };
})();

interfaceMain.start();
