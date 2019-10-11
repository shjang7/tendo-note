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
window.localStorage.setItem('currentProject', 'project-1');

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
  todoController.updateTodoListForProject(projectId);
  const todoArray = todoController.getTodoListForProject();

    // console.log(element);
    display.addTodoGroup(todoArray);
}

const createEvents = (word) => {
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
