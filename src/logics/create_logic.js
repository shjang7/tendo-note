import { project, todo, savings } from './objects';
import storage from './storage';

const getNewId = (sort) => {
  const data = {};
  let id;
  if (storage.getJsonInfoFromStorage('ids') && storage.getJsonInfoFromStorage('ids')[`${sort}LastId`]) {
    id = storage.getJsonInfoFromStorage('ids')[`${sort}LastId`];
    const newNumber = Number(id.split('-')[1]) + 1;
    id = `${sort}-${newNumber}`;
  } else {
    id = `${sort}-1`;
  }
  data[`${sort}LastId`] = id;
  data[`${sort}CurrentId`] = id;
  storage.appendJsonInfoToStorage({ sort: 'ids', data });
  return id;
};

const createProject = (() => {
  const setDefaultProject = () => {
    const storageData = storage.getJsonInfoFromStorage('project');
    if (!storageData || storageData.length === 0) {
      const defaultProject = [
        { projectName: 'default project', id: 'project-1' },
      ];
      storage.setJsonInfoToStorage({ sort: 'project', data: defaultProject });
      storage.appendJsonInfoToStorage({
        sort: 'ids',
        data: {
          projectLastId: defaultProject[0].id,
          projectCurrentId: defaultProject[0].id,
        },
      });
    }
  };

  const addProjectList = ({ projectName, id }) => {
    const copyProjectId = id || getNewId('project');
    savings.projectList.push(project({ projectName, id: copyProjectId }));
    storage.setJsonInfoToStorage({ sort: 'project', data: savings.projectList });
  };

  const setInfoFromStorage = () => {
    const val = storage.getJsonInfoFromStorage('project');
    if (val) savings.projectList = val;
  };

  return {
    addProjectList, setInfoFromStorage, setDefaultProject,
  };
})();

const createTodo = (() => {
  const addTodoList = (data) => {
    if (!data.id) data.id = getNewId('todo');
    savings.todoList.push(todo(data));
    storage.setJsonInfoToStorage({ sort: 'todo', data: savings.todoList });
  };

  const setInfoFromStorage = () => {
    const val = storage.getJsonInfoFromStorage('todo');
    if (val) savings.todoList = val;
  };

  const setTodoListForProject = (projectId) => {
    savings.todoListForProject = savings.todoList.filter(e => e.projectId === projectId);
    storage.appendJsonInfoToStorage({ sort: 'ids', data: { projectCurrentId: projectId } });
  };

  return {
    addTodoList, setTodoListForProject, setInfoFromStorage,
  };
})();

const mainCreate = (() => {
  const setInit = () => {
    createProject.setDefaultProject();
    createProject.setInfoFromStorage();
    createTodo.setInfoFromStorage();
  };

  return { setInit, getNewId };
})();

export { createProject, createTodo, mainCreate };
