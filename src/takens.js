// Задача: "Первые n элементов"
// Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список, 
// состоящий из первых n (значение передается первым параметром) элементов исходного 
// (переданного вторым параметром) списка. Остальные детали работы функции демонстрирует нижеприведённый код:
// https://ru.hexlet.io/courses/sequences


// take(3, l()); // ()
// take(3, l(1, 2)); // (1, 2)
// take(1, l(7, 2)); // (7)

const takeNs = (...arr) => {

  if (arr[1].length == 0) return [];

  const acc = [];
  let n;
  arr[1].length < arr[0] ? n = arr[1].length : n = arr[0];

  for (let i = 0; i < n; i++) {
    acc.push(arr[1][i]);
  }

  return acc;
}

export default takeNs;