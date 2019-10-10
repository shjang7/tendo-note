import display from './display';
import { projectController, todoController } from './utilities';

const factoryProject = [
  { projectName: 'first project' },
  { projectName: 'second project' },
];

const todoProject = [
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

// local
// first project == current project.

display.setMainDisplay();
projectController.createProject('First Project');
const testArray = projectController.getProjectList();

testArray.forEach((element) => {
  display.addProject(element);
});

todoController.createTodo({ title: 'Tenda App' });
const todoArray = todoController.getTodoList();
todoArray.forEach((element) => {
  console.log(element);
  display.addTodo(element);
});
