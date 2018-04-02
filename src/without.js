// Функция принимает на вход массив и элементы, которые должны отсутствовать в возвращаемом массиве.
// without([2, 1, 2, 3], 1, 2, 5);
// → [3]

export default (arr, ...elements) => {
  
  const setMask = new Set (elements);
  
  return arr.filter((n) => {
    return !setMask.has(n);
  });
  
}