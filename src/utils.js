export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const getItemNumber = () => {
  const width = ((document.body.clientWidth < 1320) ? document.body.clientWidth : 1320) - 200
  return Math.floor(width / 244)
}