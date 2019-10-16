import createForm from './create_form';

const updateDisplay = (() => {
  const toggleNewForm = (form) => {
    form.classList.toggle('d-none');
  };

  const toggleCursorPointer = (button) => {
    button.classList.toggle('cursor-pointer');
  };

  const otherButtonOff = (button) => {
    const all = document.querySelectorAll('.cursor-pointer');
    all.forEach((e) => {
      if (e !== button) e.classList.toggle('pointer-events-none');
    });
  };

  const shiftFormData = ({ sort, object }) => {
    const data = {};
    const classList = object.classList.value.split(' ');
    if (sort === 'project') {
      data.projectName = object.innerText;
      object.innerText = '';
    }
    if (sort === 'todo') {
      for (let i = 0; i < object.childNodes.length - 1; i++) {
        const target = object.childNodes[i];
        const indicator = target.classList[0];
        const text = target.innerText;
        data[indicator] = text;
        target.innerText = '';
      }
      object.firstChild.style.display = 'none';
    }
    if (sort === 'todo') data.priority = classList.includes('priority-urgent') ? 'priority-urgent' : 'priority-normal';
    return { data };
  };

  const openFormToEdit = ({ id, button }) => {
    const object = button ? button.parentNode.parentNode : document.getElementById(id);
    const sort = object.id.split('-')[0];
    const openedForm = object.querySelector('form');
    if (openedForm) {
      return { status: 'opened', form: openedForm };
    }
    const { data } = shiftFormData({ sort, object });
    const form = createForm.mainForm({ option: sort, data });
    object.appendChild(form);
    toggleNewForm(form);
    return { status: 'normal', form };
  };

  const toggleDone = (button) => {
    const object = button.parentNode;
    object.classList.toggle('done');
    return object.id;
  };

  const updateCurrentProject = (newTag) => {
    const projectGroup = document.querySelector('.project-content-group');
    const previous = projectGroup.querySelector('.current-project');
    if (previous) previous.classList.remove('current-project');
    newTag.classList.add('current-project');
    return newTag.id;
  };

  const makeBlankForm = (form) => {
    form.querySelectorAll('.field').forEach((field) => {
      const selector = field.querySelector('input') || field.querySelector('textarea');
      selector.value = '';
    });
  };

  return {
    toggleDone,
    toggleCursorPointer,
    toggleNewForm,
    openFormToEdit,
    updateCurrentProject,
    makeBlankForm,
    otherButtonOff,
  };
})();

export default updateDisplay;
