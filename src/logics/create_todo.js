import { todo, savings } from './objects';
import logicUtils from './logic_utils';
import defaultTodo from './samples';

const createTodo = (() => {
  const setDefaultTodo = () => {
    if (!window.localStorage.getItem('todo')
     || JSON.parse(window.localStorage.getItem('todo')).length === 0) {
      logicUtils.updateJsonInfoToStorage({ sort: 'todo', data: defaultTodo });
      const idsData = {
        todoLastId: defaultTodo[defaultTodo.length - 1].id,
        todoCurrentId: defaultTodo[defaultTodo.length - 1].id,
      };
      logicUtils.addJsonInfoToStorage({ sort: 'ids', data: idsData });
    }
  };

  const addTodoList = (data) => {
    if (!data.id) data.id = logicUtils.getNewId('todo');
    savings.todoList.push(todo(data));
    logicUtils.updateJsonInfoToStorage({ sort: 'todo', data: savings.todoList });
  };

  const setInfoFromStorage = () => {
    const val = logicUtils.getJsonInfoFromStorage('todo');
    if (val) savings.todoList = val;
  };

  const setTodoListForProject = (projectId) => {
    savings.todoListForProject = savings.todoList.filter(e => e.projectId === projectId);
    logicUtils.addJsonInfoToStorage({ sort: 'ids', data: { projectCurrentId: projectId } });
  };

  return {
    addTodoList, setTodoListForProject, setInfoFromStorage, setDefaultTodo,
  };
})();

export default createTodo;
