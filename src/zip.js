// Функция zip, принимает на вход два списка и возвращает третий, 
// в котором каждый элемент это список элементов исходных списков, 
// стоящих на тех же позициях.

// const list1 = l(1, 5, 3, 8, 9);
// const list2 = l(2, 3, 2, 1);

// //  ((1, 2), (5, 3), (3, 2), (8, 1))
// const result = zip(list1, list2);
// Как видно из примера, если списки различаются по длине, 
// то длина результирующего списка равна длине короткого списка.


const zip = (list1, list2) => {

  const shortestLength = list1.length > list2.length ? list2.length : list1.length;

  const arr = [];

  for (let n = 0; n < shortestLength; n++) {
    arr[n] = [list1[n], list2[n]];
  }

  return arr;
}

export default zip;

