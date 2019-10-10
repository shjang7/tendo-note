// create project
const project = projectName => ({ projectName });

const projectController = (() => {
  let projectList = [];
  const createProject = (data) => {
    projectList.push(project(data));
  };

	const getProjectList = () => projectList;
	const setInfoFromStorage = () => {
		projectList = JSON.parse(window.localStorage.getItem('project'));
	};
	return { createProject, getProjectList, setInfoFromStorage };
})();

const todo = ({ title }) => ({ title });

const todoController = (() => {
  let todoList = [];
  const createTodo = (data) => {
    todoList.push(todo(data));
  };
	const getTodoList = () => todoList;
	const setInfoFromStorage = () => {
		todoList = JSON.parse(window.localStorage.getItem('todo'));
	};
	return { createTodo, getTodoList , setInfoFromStorage };

})();


// addProject({ title: 'a' });
// addProject({ title: 'b' });
// sending to display: call

// create todo list
export { projectController, todoController };
