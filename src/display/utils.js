const utils = (() => {
  const createTag = ({
    tag, id, classes, text,
  }) => {
    const obj = document.createElement(tag);
    if (id) obj.setAttribute('id', id);
    if (classes) classes.split(' ').forEach(elem => obj.classList.add(elem));
    if (text) obj.textContent = text;
    return obj;
  };

  const getDateFromToday = (addDate) => {
    let date = new Date();
    date.setDate(date.getDate() + addDate);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = date.getFullYear();
    date = `${yyyy}-${mm}-${dd}`;
    return date;
  };

  const resizeTextarea = () => {
    const textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${20 + textarea.scrollHeight}px`;
    });
  };

  const focusSet = () => {
    const formGroup = document.querySelectorAll('form');
    for (let i = 0; i < formGroup.length; i++) {
      if (formGroup[i].style.display !== 'none') {
        formGroup[i].querySelector('input').focus();
        break;
      }
    }
  };

  const eventSet = () => {
    resizeTextarea();
    focusSet();
  };

  const eliminateFirstOfDash = words => words.split('-')[1];

  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

  const exchangeDashToCapital = (word) => {
    const words = word.split('-');
    if (words.length > 1) {
      words[1] = capitalize(words[1]);
    }
    return words.join('');
  };

  const exchangeSpaceToDash = word => word.split(' ').join('-');

  const includeSpace = word => word.split(' ').length > 1;


  return {
    createTag,
    getDateFromToday,
    eventSet,
    eliminateFirstOfDash,
    exchangeDashToCapital,
    exchangeSpaceToDash,
    includeSpace,
  };
})();

export default utils;
