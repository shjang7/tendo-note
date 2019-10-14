const deleteDisplay = (() => {
  const getDeleteButtonAll = (id) => {
    const container = document.getElementById(id);
    return container.querySelectorAll('.delete');
  };

  const deleteUnit = (button) => {
    const object = button.parentNode;
    object.parentNode.removeChild(object);
    return object.id;
  };

  const getResetButton = () => {
    const parent = document.getElementById('project');
    return parent.querySelector('.h-title');
  };

  return { getDeleteButtonAll, deleteUnit, getResetButton };
})();

export default deleteDisplay;
