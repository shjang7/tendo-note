import utils from './utils';

const createForm = (() => {
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

  const priorityField = (priority) => {
    const field = utils.createTag({ tag: 'div', classes: 'field priority' });
    let checked = [true, false];
    if (priority && priority === 'priority-urgent') {
      checked = [false, true];
    }
    priorityUnit('normal', field, checked[0]);
    priorityUnit('urgent', field, checked[1]);
    return field;
  };

  const mainForm = ({ option, data }) => {
    const form = utils.createTag({
      tag: 'form', classes: utils.exchangeSpaceToDash(`${option} form`),
    });
    form.classList.add('d-none');
    const fieldset = utils.createTag({ tag: 'fieldset' });
    form.appendChild(fieldset);
    if (option === 'project') {
      if (data) fieldset.appendChild(buildField({ placeholder: 'project name', defaultValue: data.projectName }));
      else fieldset.appendChild(buildField({ placeholder: 'project name' }));
    } else {
      fieldset.appendChild(buildField({
        placeholder: 'title', defaultValue: data ? data.title : '',
      }));
      fieldset.appendChild(buildField({
        placeholder: 'date',
        type: 'date',
        defaultValue: data ? data.date : utils.getDateFromToday(0),
      }));
      fieldset.appendChild(priorityField(data ? data.priority : ''));
      fieldset.appendChild(buildField({
        placeholder: 'description',
        textarea: 'textarea',
        defaultValue: data ? data.description : '',
      }));
    }
    return form;
  };
  return { mainForm };
})();

export default createForm;
