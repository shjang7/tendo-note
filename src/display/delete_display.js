const deleteDisplay = (() => {
  const deleteUnit = ({ id, button }) => {
    const object = button ? button.parentNode.parentNode : document.getElementById(id);
    object.parentNode.removeChild(object);
    return object.id;
  };

  return { deleteUnit };
})();

export default deleteDisplay;
