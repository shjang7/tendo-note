const display = (() => {
  const createTag = ({ tag, id, classes, text }) => {
		const obj = document.createElement(tag);

    if(id) obj.setAttribute('id', id);
    classes.split(' ').forEach(elem => {
      obj.classList.add(elem);
		})
		if(text) obj.textContent = text;
		return obj;
  }

  const projectContainer = createTag({ tag: 'div', id: 'project',
                                       classes: 'col-md-4 h-100 test-red-bg'});
  const todoContainer = createTag({ tag: 'div', id: 'todo',
                                 classes: 'col-md-8 h-100 test-blue-bg'});

  const addProject = ({ projectName }) => {
    // receive project
    const project = createTag({ tag: 'div', classes: 'project test-project'});
    project.textContent = projectName;
    projectContainer.appendChild(project);
	}

	const addTodo = ({ title }) => {
		const todo = createTag({ tag: 'div', classes: 'to-do'});
		// console.log(title, todo);
		// const titleTag = createTag({ tag: 'h4', classes: '', text: title});
		// find out why it fails with empty string
		let titleTag = document.createElement('h4');
		titleTag.textContent = title;

		todo.appendChild(titleTag);
		todoContainer.appendChild(todo);
	}

  const setMainDisplay = () => {
    const mainContainer = document.querySelector('#content');
    mainContainer.classList.add('row');
    mainContainer.appendChild(projectContainer);
    mainContainer.appendChild(todoContainer);
    return mainContainer;
  }

  return { setMainDisplay, addProject, addTodo };
})();

export default display;
