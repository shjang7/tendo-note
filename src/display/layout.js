import utils from './utils';
import formController from './form_controller';

const layout = (() => {
  const headerSet = (header, word) => {
    header.appendChild(utils.createTag({
      tag: 'h1', classes: 'h-title', text: word,
    }));
    header.appendChild(utils.createTag({
      tag: 'h1', classes: 'create-form', text: '+',
    }));
  };

  const setProject = (projectContainer) => {
    const projectGroup = utils.createTag({
      tag: 'div', classes: 'project-content-group',
    });
    headerSet(projectContainer, 'Project');
    projectContainer.appendChild(projectGroup);
    return projectContainer;
  };

  const setTodo = (todoContainer) => {
    const todoGroup = utils.createTag({
      tag: 'div', classes: 'todo-content-group',
    });
    headerSet(todoContainer, 'Todo');
    todoContainer.appendChild(todoGroup);
    return todoContainer;
  };

  const set = () => {
    const mainContainer = document.querySelector('#content');
    const projectContainer = utils.createTag({
      tag: 'section', id: 'project', classes: 'col-md-4 primary-bg',
    });
    const todoContainer = utils.createTag({
      tag: 'section', id: 'todo', classes: 'col-md-8 secondary-bg',
    });
    mainContainer.classList.add('secondary-bg');
    mainContainer.appendChild(setProject(projectContainer));
    mainContainer.appendChild(setTodo(todoContainer));
    projectContainer.appendChild(formController.createForm({ option: 'project' }));
    todoContainer.appendChild(formController.createForm({ option: 'todo' }));
    return mainContainer;
  };

  return { set };
})();

export default layout;
