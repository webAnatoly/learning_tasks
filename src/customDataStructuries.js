// Реализация типа данных "лист"
const l = (...items) => items;

l.toString = (array) => `(${array.join(', ')})`; // возвращает строковое представление списка

l.head = (array) => array[0].toString(); // возвращает первый элемент списка


l.tail = (array) => `(${array.slice(1).join(', ')})`; // возвращает "хвост" списка (все элементы, кроме первого)


l.isEmpty = (array) => array.length == 0 ? true : false; // проверяет, является ли список пустым

// l.cons(item, list) - добавляет элемент в начало списка и возвращает новый список
l.cons = (item, array) => {
  const newArr = [item];
  for (let i = 0; i < array.length; i++) {
    newArr[i+1] = array[i];
  }
  return l.toString(newArr);
}

l.filter = (predicate, array) => {
  const filteredArr = array.filter(predicate);
  return l.toString(filteredArr);
}

l.map = (callback, array) => l.toString(array.map(callback));

l.reduce = (callback, init, array) => {
  const arrToStr = array.reduceRight(callback, init);
  if(arrToStr[arrToStr.length-1] == ',') {
    return arrToStr.slice(0, -1);
  }
  return arrToStr;
}

export {l};