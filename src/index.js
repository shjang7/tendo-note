import display from './display'
import { projectController, todoController } from './utilities'


display.setMainDisplay();
projectController.createProject('First Project');
let testArray = projectController.getProjectList();

testArray.forEach(element => {
	display.addProject(element);
});

todoController.createTodo({ title: 'Tenda App'});
let todoArray = todoController.getTodoList();
todoArray.forEach(element => {
	console.log(element);
	display.addTodo(element);
});
