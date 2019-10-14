import utils from './utils';

const createProject = (() => {
  const addEach = ({ projectName, id }) => {
    const project = utils.createTag({
      tag: 'h4', id, classes: 'project-content m-0',
    });

    project.textContent = projectName;
    const projectGroup = document.querySelector('.project-content-group');
    projectGroup.appendChild(project);
  };

  const addGroup = (projectArray) => {
    projectArray.forEach(e => addEach(e));
  };
  return { addGroup };
})();

export default createProject;
