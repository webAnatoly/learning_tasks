// Функция принимает на вход два массива, а возвращает массив, 
// составленный из элементов первого, которых нет во втором.

// diffArr([2, 1], [2, 3]); // [1]

export default (arr1, arr2) => {
  const result = [];

  if (arr2.length == 0) {
    return arr1.map((n) => n );
  }

  for (let i = 0; i < arr1.length; i++) {

    let flag = false;
    
    for (let n = 0; n < arr2.length; n++) {
      if (arr1[i] == arr2[n]) {
        break; // если элемент встретился выйти из цикла без переключения флага
      }
      flag = true; // если элеменет не встретился, то переключить флаг на true
    }

    if (flag) {
      result.push(arr1[i]);
    }
  }

  return result;
}