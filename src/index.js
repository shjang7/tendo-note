import display from './display';
import { projectController, todoController } from './utilities';

const factoryProject = [
  { projectName: 'first project' },
  { projectName: 'second project' },
];

const factoryTodo = [
  {
    title: 'first project one',
    projectName: 'first project',
    date: '03/nov/2019',
  },
  {
    title: 'first project two',
    projectName: 'first project',
    date: '03/nov/2019',
  },
  {
    title: 'first project three',
    projectName: 'first project',
    date: '03/nov/2019',
  },
];

// window.localStorage.setItem('project', JSON.stringify(factoryProject));
//
// // console.log(JSON.parse(window.localStorage.getItem('project')));
//
// window.localStorage.setItem('todo', JSON.stringify(factoryTodo));
// // console.log(JSON.parse(window.localStorage.getItem('todo')));
//
// window.localStorage.setItem('currentProject', 'project-1');

projectController.setInfoFromStorage();
todoController.setInfoFromStorage();

display.setMainDisplay();
/////

const projectArray = projectController.getProjectList();
display.addProjectGroup(projectArray);

const todoArray = todoController.getTodoListForProject();
display.addTodoGroup(todoArray);

const updateCurrentProject = (tag) => {
  const projectId = display.updateCurrentProject(tag);
  window.localStorage.setItem('currentProjectId', projectId);
  todoController.updateTodoListForProject(projectId);
  const todoArray = todoController.getTodoListForProject();
  display.addTodoGroup(todoArray);
}

const submitFormProject = (fieldset) => {
  const data = display.submitForm(fieldset);
  projectController.addProjectList(data);
}

const submitFormTodo = (fieldset) => {
  const projectId = window.localStorage.getItem('currentProjectId');
  const data = display.submitForm(fieldset, projectId);
  todoController.addTodoList(data);
}

const createEvents = (word) => {
	const {fieldset, open } = display.getFormData(word);
	fieldset.addEventListener('keypress', e => {
		if(e.keyCode === 13) {
			if(word === 'project') submitFormProject(fieldset);
			if (word === 'todo') submitFormTodo(fieldset);
			display.makeBlankForm(fieldset);
      window.location.reload();
		};
	});
  if (word === 'project') {
    const tags = display.getProjectList();
    if (tags.length > 0) {
      tags.forEach(tag => {
        tag.addEventListener('click', () => updateCurrentProject(tag));
      })
      updateCurrentProject(tags[tags.length - 1]);
    }
  }

}

['project', 'todo'].forEach(word => createEvents(word));

// setCurrentProject();
