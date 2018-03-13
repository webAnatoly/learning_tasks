// Задача 6 Счастливые числа
// https://ru.hexlet.io/challenges/programming_basics_happy_numbers
export default number => {

  const sumOfSquareDigits = (n) => {
    // функция принимает на вход число и возвращает "сумму квадратов цифр" этого числа
    return String(n).split('').map(n => Number(n)**2).reduce((a,b) => a+b);
  }

  let counter = 0;

  while (counter < 10) {
    if (number == 1) {
      return true;
    } else if (number == 0) {
      return false;
    } else if (number <= 9) {
      number = number**2;
    } else {
      number = sumOfSquareDigits(number);
    }
    counter++;
  }
  return ('A lot of iteration');
}