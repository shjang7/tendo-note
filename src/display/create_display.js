import createForm from './create_form';
import utils from './utils';

const commonUsage = (() => {
  const setting = () => {
    const tag = utils.createTag({ tag: 'div', classes: 'setting' });
    tag.appendChild(utils.createTag({ tag: 'i', classes: 'edit fas fa-edit cursor-pointer' }));
    tag.appendChild(utils.createTag({ tag: 'i', classes: 'delete far fa-times-circle cursor-pointer' }));
    return tag;
  };

  const headerSet = (header, word) => {
    header.appendChild(utils.createTag({
      tag: 'h1', classes: 'h-title', text: word,
    }));
    header.appendChild(utils.createTag({
      tag: 'h1', classes: 'create-form cursor-pointer', text: '+',
    }));
  };

  const setGroup = (sort, container) => {
    const group = utils.createTag({
      tag: 'div', classes: `${sort}-content-group`,
    });
    headerSet(container, utils.capitalize(sort));
    container.appendChild(group);
    return container;
  };

  return { setting, setGroup };
})();

const createLayout = (() => {
  const render = () => {
    const mainContainer = document.querySelector('#content');
    const projectContainer = utils.createTag({
      tag: 'section', id: 'project', classes: 'col-md-4 primary-bg',
    });
    const todoContainer = utils.createTag({
      tag: 'section', id: 'todo', classes: 'col-md-8 secondary-bg',
    });
    mainContainer.classList.add('secondary-bg');
    mainContainer.appendChild(commonUsage.setGroup('project', projectContainer));
    mainContainer.appendChild(commonUsage.setGroup('todo', todoContainer));
    projectContainer.appendChild(createForm.mainForm({ option: 'project' }));
    projectContainer.appendChild(commonUsage.setting());
    todoContainer.appendChild(createForm.mainForm({ option: 'todo' }));
    return mainContainer;
  };
  return { render };
})();

const createProject = (() => {
  const projectUnitDisplay = ({ projectName, id }) => {
    const project = utils.createTag({
      tag: 'h4', id, classes: 'project-content m-0 cursor-pointer',
    });

    project.textContent = projectName;
    const projectGroup = document.querySelector('.project-content-group');
    projectGroup.appendChild(project);
  };

  const addGroup = (projectArray) => {
    projectArray.forEach(e => projectUnitDisplay(e));
  };

  return { addGroup };
})();

const createTodo = (() => {
  const doneStatusDisplay = ({ done, parent }) => {
    const target = utils.createTag({
      tag: 'input', classes: 'done-btn vertical-align-bottom cursor-pointer',
    });
    target.type = 'checkbox';
    if (done) {
      target.checked = true;
      parent.classList.add('done');
    }
    return target;
  };

  const todoUnitDisplay = ({
    title, date, priority, description, id, done,
  }) => {
    const todo = utils.createTag({
      tag: 'div', id, classes: `todo-content no-gutter ${priority}`,
    });
    todo.appendChild(doneStatusDisplay({ done, parent: todo }));
    todo.appendChild(utils.createTag({
      tag: 'h4',
      classes: 'title text-nowrap m-0',
      text: title,
    }));
    todo.appendChild(utils.createTag({
      tag: 'div',
      classes: 'date',
      text: date,
    }));
    todo.appendChild(utils.createTag({
      tag: 'div',
      classes: 'description text-nowrap',
      text: description,
    }));
    todo.appendChild(commonUsage.setting());
    return todo;
  };

  const addGroup = (newGroup) => {
    const todoGroup = document.querySelector('.todo-content-group');
    while (todoGroup.firstChild) {
      todoGroup.removeChild(todoGroup.firstChild);
    }
    newGroup.forEach(e => todoGroup.appendChild(todoUnitDisplay(e)));
  };

  return { addGroup };
})();

export { createLayout, createProject, createTodo };
