const update = (() => {
  const getDoneButtonAll = (id) => {
    const container = document.getElementById(id);
    return container.querySelectorAll('.done-btn');
  };

  const done = (button) => {
    const object = button.parentNode;
    object.classList.toggle('done');
    return object.id;
  };

  const getProjectList = () => document.querySelector('.project-content-group').childNodes;

  const updateCurrentProject = (newTag) => {
    const projectGroup = document.querySelector('.project-content-group');
    const previous = projectGroup.querySelector('.current-project');
    if (previous) previous.classList.remove('current-project');
    newTag.classList.add('current-project');
    return newTag.id;
  };

  const lastCurrentProject = (projectId) => {
    if (projectId) {
      return document.querySelector(`#${projectId}`);
    }
    if (document.querySelector('.project-content-group').childNodes.length > 0) {
      return document.querySelector('.project-content-group').lastChild;
    }
    return undefined;
  };

  return {
    getDoneButtonAll,
    done,
    updateCurrentProject,
    getProjectList,
    lastCurrentProject,
  };
})();

export default update;
