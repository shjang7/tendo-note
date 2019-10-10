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

window.localStorage.setItem('project', JSON.stringify(factoryProject));

// console.log(JSON.parse(window.localStorage.getItem('project')));

window.localStorage.setItem('todo', JSON.stringify(factoryTodo));
// console.log(JSON.parse(window.localStorage.getItem('todo')));

window.localStorage.setItem('currentProject', 'first project');

projectController.setInfoFromStorage();
todoController.setInfoFromStorage();

display.setMainDisplay();
const testArray = projectController.getProjectList();

testArray.forEach((element) => {
  display.addProject(element);
});

const todoArray = todoController.getTodoList();
todoArray.forEach((element) => {
  console.log(element);
  display.addTodo(element);
});
