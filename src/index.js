import displayInterface from './display_interface';
import logicInterface from './logic_interface';

const interfaceMain = (() => {
  const projectSetting = () => {
    const projectArray = logicInterface.getProjectList();
    displayInterface.addProjectGroup(projectArray);
  };

  const todoSetting = () => {
    const todoArray = logicInterface.getTodoListForProject();
    displayInterface.addTodoGroup(todoArray);
  };

  const updateCurrentProject = (button) => {
    const projectId = displayInterface.updateCurrentProject(button);
    logicInterface.updateTodoListForProject(projectId);
    displayInterface.toggleCursorPointer(button);
    todoSetting();
  };

  const afterSubmission = (form) => {
    displayInterface.makeBlankForm(form);
    displayInterface.reloadScreen();
  };

  const submitForm = (sort, form) => {
    const data = displayInterface.getFormData(form);
    if (displayInterface.collectFormHiddenData({ data, form })) {
      logicInterface.fillInData({ data });
      logicInterface.updateUnit({ id: data.id, data });
    } else {
      if (sort === 'project') {
        logicInterface.addProjectList(data);
      }
      if (sort === 'todo') {
        data.projectId = logicInterface.getCurrentProject();
        logicInterface.addTodoList(data);
      }
    }
    afterSubmission(form);
  };

  const setInitialCurrentProject = () => {
    const projectId = logicInterface.getCurrentProject();
    const projectObj = displayInterface.currentOrLastProject(projectId);
    if (projectObj) updateCurrentProject(projectObj);
  };

  const formSubmissionEvent = (form, sort) => {
    form.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        submitForm(sort, form);
      }
    });
  };

  const projectSwitchEvent = () => {
    const buttons = displayInterface.getProjectsExceptCurrent();
    if (buttons.length > 0) {
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          updateCurrentProject(button);
          displayInterface.reloadScreen();
        });
      });
    }
  };

  const deleteProjectUnit = () => {
    const id = logicInterface.getCurrentProject();
    displayInterface.deleteUnit({ id });
    logicInterface.deleteUnit(id);
    displayInterface.reloadScreen();
  };

  const deleteTodoUnit = (button) => {
    const id = displayInterface.deleteUnit({ button });
    logicInterface.deleteUnit(id);
  };

  const deleteEvent = (word) => {
    const deleteAllButton = displayInterface.getDeleteButtonAll(word);
    deleteAllButton.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', () => {
        if (word === 'project') deleteProjectUnit();
        if (word === 'todo') deleteTodoUnit(deleteBtn);
      });
    });
  };

  const doneUnit = (button) => {
    const id = displayInterface.toggleDone(button);
    logicInterface.doneUnit(id);
  };

  const doneEvent = (word) => {
    const doneAllBtn = displayInterface.getDoneButtonAll(word);
    doneAllBtn.forEach((doneBtn) => {
      doneBtn.addEventListener('click', () => {
        doneUnit(doneBtn);
      });
    });
  };

  const editProject = () => {
    const id = logicInterface.getCurrentProject();
    return displayInterface.openFormToEdit({ id });
  };

  const editTodo = button => displayInterface.openFormToEdit({ button });

  const editUnit = (sort, button) => {
    displayInterface.otherButtonOff(button);
    const { status, form } = (sort === 'project') ? editProject() : editTodo(button);
    if (status === 'opened') {
      submitForm(sort, form);
    } else {
      formSubmissionEvent(form, sort);
      displayInterface.focusSet(form);
    }
  };

  const editEvent = (sort) => {
    const editAllBtn = displayInterface.getEditButtonAll(sort);
    editAllBtn.forEach((btn) => {
      btn.addEventListener('click', () => { editUnit(sort, btn); });
    });
  };

  const programResetEvent = () => {
    const resetBtn = displayInterface.getResetButton();
    let num = 0;
    resetBtn.addEventListener('click', () => {
      num += 1;
      if (num < 7) return; // reset should be hidden from user
      logicInterface.resetStorage();
      displayInterface.reloadScreen();
    });
  };

  const openFormEvent = (open, form) => {
    open.addEventListener('click', () => {
      displayInterface.otherButtonOff(open);
      displayInterface.toggleNewForm(form);
      displayInterface.focusSet(form);
    });
  };

  const createEvents = (word) => {
    const { open, form } = displayInterface.getFormLayout(word);
    openFormEvent(open, form);
    formSubmissionEvent(form, word);
    editEvent(word);
    deleteEvent(word);
    if (word === 'todo') {
      doneEvent(word);
    }
    if (word === 'project') {
      projectSwitchEvent();
      programResetEvent();
    }
  };

  const init = () => {
    logicInterface.setInit();
    displayInterface.render();
    displayInterface.dynamicSetting();
    projectSetting();
    setInitialCurrentProject();
  };

  const start = () => {
    init();
    ['project', 'todo'].forEach(word => createEvents(word));
  };

  return { start };
})();

interfaceMain.start();
