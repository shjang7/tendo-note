import utils from './utils';

const readDisplay = (() => {
  const getEditButtonAll = (id) => {
    const container = document.getElementById(id);
    return container.querySelectorAll('.edit');
  };

  const collectFormHiddenData = ({ data, form }) => {
    const parent = form.parentNode;
    if (parent.id.split('-').length !== 2) return undefined;
    const classes = parent.classList.value.split(' ');
    data.done = classes.includes('done');
    data.id = parent.id;
    return data;
  };

  const getDoneButtonAll = (id) => {
    const container = document.getElementById(id);
    return container.querySelectorAll('.done-btn');
  };

  const getProjectList = () => document.querySelector('.project-content-group').childNodes;

  const getProjectsExceptCurrent = () => {
    const collection = [];
    const allList = getProjectList();
    const len = allList.length;
    for (let i = 0; i < len; i++) {
      const classes = allList[i].classList.value.split(' ');
      if (!classes.includes('current-project')) {
        collection.push(allList[i]);
      }
    }
    return collection;
  };

  const getFormLayout = (id) => {
    const selector = document.getElementById(id);
    const opens = selector.querySelectorAll('.create-form');
    const form = selector.querySelector('form');
    return { form, opens };
  };

  const getRadioInfo = (input, data) => {
    const radios = input.parentNode.querySelectorAll('input');
    radios.forEach((radio) => {
      if (radio.checked) {
        data[radio.name] = radio.id;
      }
    });
  };

  const getFormData = (form) => {
    const data = {};
    form.querySelectorAll('.field').forEach((field) => {
      const selector = field.querySelector('input') || field.querySelector('textarea');
      if (selector.type === 'radio') {
        getRadioInfo(selector, data);
      } else {
        const key = utils.exchangeDashToCapital(selector.name);
        const { value } = selector;
        data[key] = value;
      }
    });
    return data;
  };

  const currentOrLastProject = (projectId) => {
    if (projectId) {
      return document.querySelector(`#${projectId}`);
    }
    if (document.querySelector('.project-content-group').childNodes.length > 0) {
      return document.querySelector('.project-content-group').lastChild;
    }
    return undefined;
  };

  const getDeleteButtonAll = (id) => {
    const container = document.getElementById(id);
    return container.querySelectorAll('.delete');
  };

  const getResetButton = () => {
    const parent = document.getElementById('todo');
    return parent.querySelector('.h-title');
  };

  return {
    getEditButtonAll,
    collectFormHiddenData,
    getDoneButtonAll,
    getProjectList,
    getProjectsExceptCurrent,
    getFormLayout,
    getFormData,
    currentOrLastProject,
    getDeleteButtonAll,
    getResetButton,
  };
})();

export default readDisplay;
