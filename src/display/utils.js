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

  const focusSet = (target) => {
    if (target) target.querySelector('input').focus();
  };

  const reloadScreen = () => window.location.reload();

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

  const dynamicSetting = () => {
    resizeTextarea();
    focusSet();
  };

  return {
    createTag,
    getDateFromToday,
    eliminateFirstOfDash,
    exchangeDashToCapital,
    exchangeSpaceToDash,
    includeSpace,
    resizeTextarea,
    focusSet,
    reloadScreen,
    dynamicSetting,
    capitalize,
  };
})();

export default utils;
