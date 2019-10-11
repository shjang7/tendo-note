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

  const getProjectId = () => {
    let projectId = 1;
    if (window.localStorage.getItem('projectId')) {
      projectId = Number(window.localStorage.getItem('projectId'));
      // console.log(projectId);
    }
    window.localStorage.setItem('projectId', projectId + 1);
    return projectId;
  }

  const addProject = ({ projectName, projectId = 0 }) => {
		if (projectId === 0)projectId = getProjectId();
    const project = createTag({ tag: 'div', id: `${projectId}`, classes: 'project-content' });

    project.textContent = projectName;
    projectGroup.appendChild(project);
  };

  const addTodo = ({ title , date }) => {
    const todo = createTag({ tag: 'div', classes: 'todo-content' });
		const titleTag = createTag({ tag: 'h4', classes: 'title', text: title });
		const dateTag = createTag({tag: 'div', classes: 'date', text: date});

		todo.appendChild(titleTag);
		todo.appendChild(dateTag);
		todoGroup.appendChild(todo);
	};
  const addProjectGroup = (projectArray) => {
		projectArray.forEach((element) => {
		  addProject(element);
	  });
	}

	const addTodoGroup = (todoArray) => {
		// remove()
		while (todoGroup.firstChild) {
			todoGroup.removeChild(todoGroup.firstChild);
		};
	  todoArray.forEach((element) => {
		// console.log(element);
	  	addTodo(element);
		});
	////
	}

  const headerSet = (header, word) => {
    header.appendChild(createTag({ tag: 'h1', classes: 'h-title', text: word }));
    header.appendChild(createTag({ tag: 'h1', classes: 'create-form', text: '+' }));
  };

  const projectForm = () => {
    const form = createTag({ tag: 'form', classes: 'project-form' });
    const fieldset = createTag({ tag: 'fieldset' });
    form.appendChild(fieldset);
    let field = createTag({ tag: 'div', classes: 'field' });
    let input = createTag({ tag: 'input', classes: 'project-name' });
    input.setAttribute('placeholder', 'project name');
    field.appendChild(input);
    fieldset.appendChild(field);
    return form;
  };

  const todoForm = () => {
    const form = createTag({ tag: 'form', classes: 'todo-form' });
    const fieldset = createTag({ tag: 'fieldset' });
    form.appendChild(fieldset);
    let field = createTag({ tag: 'div', classes: 'field' });
    let input = createTag({ tag: 'input', classes: 'title' });
    input.setAttribute('placeholder', 'title');
    field.appendChild(input);
    fieldset.appendChild(field);

    field = createTag({ tag: 'div', classes: 'field' });
    input = createTag({ tag: 'input', classes: 'date' });
    input.setAttribute('placeholder', 'date');
    field.appendChild(input);
    fieldset.appendChild(field);

    return form;
  };

  const getProjectList = () => {
    return projectGroup.childNodes;
	}

	const submitFormProject = () => {
		// return submitformProject
	};

	const submitFormTodo = (fieldset) => {
		// return
		fieldset.childNodes.forEach(field => {
			const value = field.querySelector('input').value;
			window.localStorage.setItem('test-todo', value);
		});
	};

	const makeBlankForm = (fieldset) => {
		fieldset.childNodes.forEach(field => {
			field.querySelector('input').value = '';
		});
	};

  const updateCurrentProject = (newTag) => {
    const previous = projectGroup.querySelector('.current-project');
    if (previous) {
      previous.classList.remove('current-project');
    }
    newTag.classList.add('current-project');
    return newTag.id;
	}

	const getFormData = (id) => {
		const getIdInfo = document.getElementById(id);
		const open = getIdInfo.querySelector('.create-form');
		const fieldset = getIdInfo.querySelector('fieldset');
		return { fieldset, open};
	}

  const setMainDisplay = () => {
    const projectContainer = createTag({ tag: 'section', id: 'project', classes: 'col-md-4 primary-bg' });
    const todoContainer = createTag({ tag: 'section', id: 'todo', classes: 'col-md-8 secondary-bg' });
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

  return {
		setMainDisplay, addProject, getProjectList, updateCurrentProject, addTodoGroup, addProjectGroup, getFormData,
		submitFormProject, submitFormTodo, makeBlankForm,
  };
})();

export default display;
