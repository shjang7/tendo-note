import utils from './utils';

const createTodo = (() => {
  const doneStatusDisplay = ({ done, target, parent }) => {
    target.type = 'checkbox';
    if (done) {
      target.checked = true;
      parent.classList.add('done');
    }
  };

  const addEach = ({
    title, date, priority, description, id, done,
  }) => {
    const todo = utils.createTag({
      tag: 'div', id, classes: `todo-content no-gutter ${priority}`,
    });
    const doneTarget = utils.createTag({
      tag: 'input', classes: 'done-btn vertical-align-bottom',
    });
    doneStatusDisplay({ done, target: doneTarget, parent: todo });
    todo.appendChild(doneTarget);
    todo.appendChild(utils.createTag({
      tag: 'h4',
      classes: 'title col-md-3 text-nowrap m-0 vertical-align-bottom',
      text: title,
    }));
    todo.appendChild(utils.createTag({
      tag: 'div',
      classes: 'date col-md-3 vertical-align-bottom',
      text: date,
    }));
    todo.appendChild(utils.createTag({
      tag: 'div',
      classes: 'description col-md-3 text-nowrap vertical-align-bottom',
      text: description,
    }));
    todo.appendChild(utils.createTag({
      tag: 'div',
      classes: 'edit col-md-1 vertical-align-bottom',
      text: 'edit',
    }));
    todo.appendChild(utils.createTag({
      tag: 'div',
      classes: 'delete col-md-1 vertical-align-bottom',
      text: 'delete',
    }));
    return todo;
  };

  const addGroup = (newGroup) => {
    const todoGroup = document.querySelector('.todo-content-group');
    while (todoGroup.firstChild) {
      todoGroup.removeChild(todoGroup.firstChild);
    }
    newGroup.forEach(e => todoGroup.appendChild(addEach(e)));
  };

  return { addGroup };
})();

export default createTodo;
