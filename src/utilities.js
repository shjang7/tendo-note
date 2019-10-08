// create project
const project = (projectName) => {
	return { projectName };
};

const projectController = (() => {
	let projectList = [];
	const createProject = (data) => {
		projectList.push (project(data));
	};

	const getProjectList = () => {
		return projectList;
	};
	return { createProject, getProjectList };

})();

const todo = ({ title }) => {
	return { title };
};

const todoController = (() => {
	let todoList = [];
	const createTodo = (data) => {
		todoList.push (todo(data));
	};
	const getTodoList = () => {
		return todoList;
	};
	return { createTodo, getTodoList };
})();



// addProject({ title: 'a' });
// addProject({ title: 'b' });
// sending to display: call

// create todo list
export  { projectController, todoController };

