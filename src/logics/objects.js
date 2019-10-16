const project = ({ projectName, id }) => ({ projectName, id });
const todo = ({
  title, projectId, date, priority, description, id, done = false,
}) => ({
  title, projectId, date, priority, description, id, done,
});

const savings = (() => {
  const projectList = [];
  const todoList = [];
  const todoListForProject = [];
  return { projectList, todoList, todoListForProject };
})();

export {
  project, todo, savings,
};
