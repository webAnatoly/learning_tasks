'use strict';
const assert = require('assert');

// Задача 1 Инвертированный регистр
// Реализуйте функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase() ? result += str[i].toLowerCase() : result += str[i].toUpperCase();
  }
  return result;
}
assert.equal(invertCase('Hello, World!'), 'hELLO, wORLD!'); // hELLO, wORLD!
assert.equal(invertCase('I loVe JS'), 'i LOvE js'); // i LOvE js
assert.equal(invertCase('    What the  hell?  '), '    wHAT THE  HELL?  ');
assert.equal(invertCase(''), '');
assert.equal(invertCase(' '), ' ');

// Задача 2 Без двух нулей
// принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, 
// что бы не было двух нулей идущих подряд
// Алгоритм: 1) посчитать все варианты размещения нолей. 2) посчитать варианты размещения пар нолей 3) вычесть результат шага 2 из шага 1

const withoutTwoZeros = (zero,b) => {

  const N = zero + b;

  const getFactorial = num => {
    if (num <= 1) return 1;
    return num * getFactorial(num-1);
  }

  // получить кол-во вариантов размещения неразличимых предметов в заданном ряде 
  const all = getFactorial(N) / (getFactorial(zero) * getFactorial(N - zero));

  // получить кол-во вариантов размещения рядом стоящих пар в заданном ряде
  const pairs = N - 1; 

  // вернуть кол-во размещений без учета парных размещений
  return zero == 1 ? all : all - pairs;

  // Это всё из области комбинаторики. 
  // Понятное введение в комбинаторику можно глянуть здесь https://www.youtube.com/playlist?list=PLFBCHVQg5AWX5-fsKITXokOsBZG8hvR6d

}
// Teсты для задачи 3
assert.equal(withoutTwoZeros(2, 2), 3); // 3
assert.equal(withoutTwoZeros(2, 1), 1); // 1
assert.equal(withoutTwoZeros(1, 1), 2); // 2
assert.equal(withoutTwoZeros(1, 3), 4), // 4
assert.equal(withoutTwoZeros(2, 4), 10); // 10
assert.equal(withoutTwoZeros(3, 5), 49); // 49


// Задача 3 Сумма квадратов 
// Сумма квадратов первых десяти натуральных чисел это 1**2 + 2**2 + 3**2 + ... + 10**2 = 385.
// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)**2 = 55*2 = 3025.
// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между
// квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = n => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return ( arr.reduce((sum, current) => sum + current) )**2 - arr.map( n => n**2 ).reduce((a, b) =>  a + b );
}

// Задача 4 Переворот строки
// Реализуйте функцию, которая переворачивает строку задом наперед, используя рекурсию.
const reverse = str => {
  if (str.length == 1) return str; 
  let newString = str[str.length-1]; // при каждом вызове последний символ записываем в переменную newString
  return newString += reverse( str.substring(0, str.length-1) ); // в каждый новый вызов передаем строку без последнего символа
}

assert.equal(reverse('str'), 'rts'); // rts
assert.equal(reverse('hexlet'), 'telxeh'); // telxeh
assert.equal(reverse('b'), 'b'); // b

// Задача 5 Найти FizzBuzz
/*
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число

Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). 
Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.
*/

const fizzBuzz = (begin, end) => {
  if (begin > end) return;
  for (let i = begin; i <= end; i++) {
    // if (i%3 == 0 && i%5 == 0) {
    //   console.log('FizzBuzz');
    // } else if (i%3 == 0) {
    //   console.log('Fizz');
    // } else if (i%5 == 0) {
    //   console.log('Buzz');
    // } else {
    //   console.log(i);
    // }
    switch (true) {
      case (i%3 == 0 && i%5 == 0):
      console.log('FizzBuzz');
      break;

      case (i%3 == 0):
      console.log('Fizz');
      break;

      case(i%5 == 0):
      console.log('Buzz');
      break;

      default:
      console.log(i);
    }
  }
}

// Задача 6 Счастливые числа
// https://ru.hexlet.io/challenges/programming_basics_happy_numbers

// Задача 7 Переворот числа

// Задача 8 Счастливый билет

// Задача 9 Разница углов
// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

const diff = (a,b) => {

  const compare = (a,b) => {
    let firstValue;
    let secondValue;
    firstValue = b - a;
    secondValue = 360 - firstValue;
    return firstValue < secondValue ? firstValue : secondValue;
  }

  return a < b ? compare(a,b) : compare(a,b);

}
// тесты к 9-й задаче
assert.equal(diff(2,6), 4);
assert.equal(diff(0, 45), 45) //=== 45;         // не 315, а 45, потому что 45 меньше
assert.equal(diff(0, 180), 180) //=== 180;
assert.equal(diff(0, 190), 170) //=== 170;       // не 190, а 170, потому что 170 меньше
assert.equal(diff(120, 280), 160) //=== 160;