const display = (() => {
  const createTag = ({
    tag, id, classes, text,
  }) => {
    const obj = document.createElement(tag);

    if (id) obj.setAttribute('id', id);
    if (classes) {
      classes.split(' ').forEach((elem) => {
        obj.classList.add(elem);
      });
    }
    if (text) obj.textContent = text;
    return obj;
  };
  const projectGroup = createTag({ tag: 'div', classes: 'project-content-group' });
  const todoGroup = createTag({ tag: 'div', classes: 'todo-content-group' });

  const addProject = ({ projectName }) => {
    // receive project
    const project = createTag({ tag: 'div', classes: 'project test-project' });
    project.textContent = projectName;
    projectGroup.appendChild(project);
  };

  const addTodo = ({ title , date }) => {
    const todo = createTag({ tag: 'div', classes: 'to-do' });
		const titleTag = createTag({ tag: 'h4', text: title });
		const dateTag = createTag({tag: 'div', classes: 'date', text: date});

		todo.appendChild(titleTag);
		todo.appendChild(dateTag);
		todoGroup.appendChild(todo);
  };

  const headerSet = (header, word) => {
    header.appendChild(createTag({ tag: 'h1', classes: 'h-title' }));
    header.appendChild(createTag({ tag: 'h1', classes: 'create-form', text: '+' }));
  };

  const projectForm = () => {
    const form = createTag({ tag: 'form', classes: 'project-form' });
    const fieldset = createTag({ tag: 'fieldset' });
    form.appendChild(fieldset);
    const input = document.createElement('input');
    input.classList.add('project-name');
    input.setAttribute('placeholder', 'project name');
    fieldset.appendChild(input);
    return form;
  };

  const todoForm = () => {
    const form = createTag({ tag: 'form', classes: 'todo-form' });
    const fieldset = createTag({ tag: 'fieldset' });
    form.appendChild(fieldset);
    let input = document.createElement('input');
    input.classList.add('title');
    input.setAttribute('placeholder', 'title');
    fieldset.appendChild(input);

    input = document.createElement('input');
    input.classList.add('date');
    input.setAttribute('placeholder', 'date');
    fieldset.appendChild(input);

    return form;
  };

  const setMainDisplay = () => {
    const projectContainer = createTag({ tag: 'section', id: 'project', classes: 'col-md-4 h-100 test-red-bg' });
    const todoContainer = createTag({ tag: 'section', id: 'todo', classes: 'col-md-8 h-100 test-blue-bg' });
    const mainContainer = document.querySelector('#content');
    mainContainer.classList.add('row');
    mainContainer.appendChild(projectContainer);
    mainContainer.appendChild(todoContainer);
    headerSet(projectContainer, 'Project');
    headerSet(todoContainer, 'Todo');
    projectContainer.appendChild(projectGroup);
    todoContainer.appendChild(todoGroup);
    projectContainer.appendChild(projectForm());
    todoContainer.appendChild(todoForm());

    return mainContainer;
  };

  return { setMainDisplay, addProject, addTodo };
})();

export default display;
