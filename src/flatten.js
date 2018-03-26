// Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный список.
// const list = l(1, 2, l(3, 5), l(l(4, 3), 2));
// (1, 2, 3, 5, 4, 3, 2)
// flatten(list);
// https://ru.hexlet.io/courses/sequences


const flatten = (list, acc) => {

  if (!acc) { acc = [] }
  
  for (let i = 0; i < list.length; i++) {
    if(list[i].length != undefined) {
      flatten(list[i], acc);
    } else {
      acc.push(list[i]);
    }
  }
  return (acc);
}

export default flatten;