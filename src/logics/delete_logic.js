import storage from './storage';
import { savings } from './objects';

const deleteLogic = (() => {
  const deleteTodoUnit = (idSort, id) => {
    const data = storage.getJsonInfoFromStorage('todo');
    const updated = (data ? data.filter(e => e[idSort] !== id) : []);
    savings.todoList = updated;
    storage.setJsonInfoToStorage({ sort: 'todo', data: updated });
  };

  const deleteProjectUnit = (idSort, id) => {
    const data = storage.getJsonInfoFromStorage('project');
    const updated = (data ? data.filter(e => e.id !== id) : []);
    savings.projectList = updated;
    storage.setJsonInfoToStorage({ sort: 'project', data: updated });
    deleteTodoUnit('projectId', id);
    storage.resetJsonInfoToStorage({ sort: 'ids', data: { projectCurrentId: null } });
  };

  const deleteUnit = (id) => {
    const sort = id.split('-')[0];
    if (sort === 'todo') deleteTodoUnit('id', id);
    if (sort === 'project') deleteProjectUnit('id', id);
  };

  return { deleteUnit };
})();

export default deleteLogic;
