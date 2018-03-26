// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход 
// список и возвращает новый, состоящий из элементов, у которых такая же 
// четность, как и у первого элемента входного списка.

// sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)

// sameParity(l()); // ()

const sameParity = (list) => {

  let key;
  list[0]%2 == 0 ? key = 2 : key = 1;
  
  return list.filter((number) => {
    if (key == 2) {
      if (number%2 == 0) return true;
    } else {
      if (number%2 != 0) return true;
    }
  });

}

export default sameParity;