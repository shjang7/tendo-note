const display = (() => {
  const createTag = ({ tag, id, classes }) => {
    const obj = document.createElement(tag);
    if(id) obj.setAttribute('id', id);
    classes.split(' ').forEach(elem => {
      obj.classList.add(elem);
    })
    return obj;
  }

  const projectContainer = createTag({ tag: 'div', id: 'project',
                                       classes: 'col-md-4 h-100 test-red-bg'});
  const todoContainer = createTag({ tag: 'div', id: 'todo',
                                 classes: 'col-md-8 h-100 test-blue-bg'});

  const addProject = ({ title }) => {
    // receive project
    const project = createTag({ tag: 'div', classes: 'project test-project'});
    project.innerText = title;
    projectContainer.appendChild(project);
  }

  const setMainDisplay = () => {
    const mainContainer = document.querySelector('#content');
    mainContainer.classList.add('row');
    mainContainer.appendChild(projectContainer);
    mainContainer.appendChild(todoContainer);
    return mainContainer;
  }

  return { setMainDisplay, addProject };
})();

export default display;
