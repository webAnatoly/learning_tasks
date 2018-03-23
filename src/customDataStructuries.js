const l = (...items) => items;

l.toString = (array) => {
  return `(${array.toString().replace(/,/g, ', ')})`;
};

export {l};