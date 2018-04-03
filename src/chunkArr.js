// Функция принимает на вход массив и число, которое задает размер чанка (куска). 
// Функция должна вернуть массив, состоящий из чанков указанной размерности.

// chunk(['a', 'b', 'c', 'd'], 2);
// → [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// → [['a', 'b', 'c'], ['d']]

export default (arr, number) => {

  if (number == 0) return arr;

  const result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (temp.length < number) {
      if(temp.push(arr[i]) == number) {
        result.push(temp);
        temp = [];
      }
    }
  }

  if (temp.length > 0) result.push(temp);

  return result;

}