import utils from './utils';

const formController = (() => {
  const buildField = ({
    placeholder, type, defaultValue, textarea,
  }) => {
    const inputType = textarea || 'input';
    const name = utils.includeSpace(placeholder) ? utils.exchangeSpaceToDash(placeholder)
      : placeholder;
    const field = utils.createTag({ tag: 'div', classes: `field ${name}` });
    const input = utils.createTag({ tag: inputType, id: name, classes: name });
    input.setAttribute('placeholder', placeholder);
    input.name = name;
    if (type) input.type = type;
    if (defaultValue) input.defaultValue = defaultValue;
    field.appendChild(input);
    return field;
  };

  const priorityUnit = (word, field, checked) => {
    const input = utils.createTag({
      tag: 'input', id: `priority-${word}`, classes: 'priority',
    });
    input.name = 'priority';
    input.type = 'radio';
    if (checked) input.checked = true;
    const label = utils.createTag({ tag: 'label', text: word });
    label.setAttribute('for', `priority-${word}`);
    field.appendChild(input);
    field.appendChild(label);
  };

  const priorityField = () => {
    const field = utils.createTag({ tag: 'div', classes: 'field priority' });
    priorityUnit('normal', field, 'checked');
    priorityUnit('urgent', field);
    return field;
  };

  const createForm = ({ option }) => {
    const form = utils.createTag({
      tag: 'form', classes: utils.exchangeSpaceToDash(`${option} form`),
    });
    const fieldset = utils.createTag({ tag: 'fieldset' });
    form.appendChild(fieldset);
    if (option === 'project') {
      fieldset.appendChild(buildField({ placeholder: 'project name' }));
    } else {
      fieldset.appendChild(buildField({ placeholder: 'title' }));
      fieldset.appendChild(buildField({
        placeholder: 'date', type: 'date', defaultValue: utils.getDateFromToday(0),
      }));
      fieldset.appendChild(priorityField());
      fieldset.appendChild(buildField({ placeholder: 'description', textarea: 'textarea' }));
    }
    return form;
  };

  const getRadioInfo = (data) => {
    const radios = document.getElementsByName('priority');
    radios.forEach((radio) => {
      if (radio.checked) {
        data[radio.name] = radio.id;
      }
    });
  };

  const makeBlankForm = (form) => {
    form.querySelectorAll('.field').forEach((field) => {
      const selector = field.querySelector('input') || field.querySelector('textarea');
      selector.value = '';
    });
  };

  const getFormLayout = (id) => {
    const selector = document.getElementById(id);
    const open = selector.querySelector('.create-form');
    const form = selector.querySelector('form');
    return { form, open };
  };

  const getFormData = (form) => {
    const data = {};
    form.querySelectorAll('.field').forEach((field) => {
      const selector = field.querySelector('input') || field.querySelector('textarea');
      if (selector.type === 'radio') {
        getRadioInfo(data);
      } else {
        const key = utils.exchangeDashToCapital(selector.name);
        const { value } = selector;
        data[key] = value;
      }
    });
    return data;
  };

  return {
    createForm, getFormData, makeBlankForm, getFormLayout,
  };
})();

export default formController;
