/**
 * @name handleClickOutside
 * @description function to check when the user clicks outside the modal
 * @param {*} node
 * @param {*} clickedOutside
 * @returns none
 */
const handleClickOutside = (node, clickedOutside) => event => {
  if (node && !node.current.contains(event.target)) {
    clickedOutside();
  }
};

export default handleClickOutside;
