// Функция принимает на вход массив чисел и искомое число. 
// Находит в массиве ближайшее число к искомому и возвращает его индекс в массиве.

// findIndexOfNearest([], 2); // null
// findIndexOfNearest([15, 10, 3, 4], 0) // 2

export default (arr, n) => {

  if (arr[0] - n == 0) return 0;
  if (arr.length == 0) return null;

  let map = [Math.abs(arr[0] - n), 0];

  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - n);
    if (diff < map[0]) { map[0] = diff; map[1] = i }
  }

  return map[1];

}