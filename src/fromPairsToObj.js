// Функция принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.

// fromPairs([['fred', 30], ['barney', 40]]);
// // → { 'fred': 30, 'barney': 40 }

export default (pairs) => {

  const obj = {};
  if (!pairs) return obj;

  pairs.forEach((arr) => {
    obj[arr[0]] = arr[1];
  });

  return obj;
}