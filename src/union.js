// Напишите и экспортируйте функцию по умолчанию union, которая принимает на вход два списка и возвращает третий, являющийся объединением уникальных значений двух исходных списков.

// const list1 = l(2, 3, 2, 1, 7);
// const list2 = l(1, 5, 3, 5, 8, 9);

// const result = union(list1, list2);
// (2, 3, 1, 7, 5, 8, 9)

const union = (list1, list2) => {
  
  const arr = [];
  list1.concat(list2).forEach((n) => {
    let isInArr = arr.some((number) => number == n);
    if (!isInArr) {
      arr.push(n);
    }
  });

  const listAsString = arr.toString();

  return listAsString;

}

const l = (...items) => items; 

export default union;
export {l};