// Задача 9 Разница углов
// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

export default (a,b) => {

  const compare = (a,b) => {
    let firstValue;
    let secondValue;
    firstValue = b - a;
    secondValue = 360 - firstValue;
    return firstValue < secondValue ? firstValue : secondValue;
  }

  return a < b ? compare(a,b) : compare(a,b);

}