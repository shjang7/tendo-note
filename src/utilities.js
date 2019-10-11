// create project
const project = ({ projectName, projectId }) => ({ projectName, projectId });

const projectController = (() => {
  let projectList = [
    { projectName: 'first project', projectId: 'project-1' },
    { projectName: 'second project', projectId: 'project-2' },
  ];
  const addProjectList = (data) => {
    projectList.push(project(data));
    window.localStorage.setItem('project', JSON.stringify(projectList));
  };

	const getProjectList = () => projectList;
	const setInfoFromStorage = () => {
    if (window.localStorage.getItem('project')) {
      projectList = JSON.parse(window.localStorage.getItem('project'));
    }
	};
	return { addProjectList, getProjectList, setInfoFromStorage };
})();

const todo = ({ title, projectId, date }) => ({ title, projectId, date });

const todoController = (() => {
  let todoList = [
    {
      title: 'first project one',
      projectId: 'project-1',
      date: '03/nov/2019',
    },
    {
      title: 'first project two',
      projectId: 'project-1',
      date: '03/nov/2019',
    },
    {
      title: 'second project one',
      projectId: 'project-2',
      date: '03/nov/2019',
    },
  ];
  let todoListForProject = [];

  const addTodoList = (data) => {
    todoList.push(todo(data));
    window.localStorage.setItem('todo', JSON.stringify(todoList));
  };
  const updateTodoListForProject = (id) => {
		todoListForProject = [];
    todoList.forEach(element => {
      if (id === element.projectId) {
        todoListForProject.push(element);
      }
    })
  };
	const getTodoList = () => todoList;
  const getTodoListForProject = () => todoListForProject;
	const setInfoFromStorage = () => {
    if(window.localStorage.getItem('todo')) {
  		todoList = JSON.parse(window.localStorage.getItem('todo'));
    }
	};
	return {
    addTodoList, getTodoList , setInfoFromStorage, updateTodoListForProject,
    getTodoListForProject,
  };

})();


// addProject({ title: 'a' });
// addProject({ title: 'b' });
// sending to display: call

// create todo list
export { projectController, todoController };
