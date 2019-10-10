// create project
const project = projectName => ({ projectName });

const projectController = (() => {
  const projectList = [];
  const createProject = (data) => {
    projectList.push(project(data));
  };

  const getProjectList = () => projectList;
  return { createProject, getProjectList };
})();

const todo = ({ title }) => ({ title });

const todoController = (() => {
  const todoList = [];
  const createTodo = (data) => {
    todoList.push(todo(data));
  };
  const getTodoList = () => todoList;
  return { createTodo, getTodoList };
})();


// addProject({ title: 'a' });
// addProject({ title: 'b' });
// sending to display: call

// create todo list
export { projectController, todoController };
