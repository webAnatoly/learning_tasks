'use strict';
const assert = require('assert');




// Задача 1 Инвертированный регистр
// Реализуйте функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
import invertCase from './invertCase';
// Тесты для задачи 1
assert.equal(invertCase('Hello, World!'), 'hELLO, wORLD!'); // hELLO, wORLD!
assert.equal(invertCase('I loVe JS'), 'i LOvE js'); // i LOvE js
assert.equal(invertCase('    What the  hell?  '), '    wHAT THE  HELL?  ');
assert.equal(invertCase(''), '');
assert.equal(invertCase(' '), ' ');






// Задача 2 Без двух нулей
// принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, 
// что бы не было двух нулей идущих подряд
// Алгоритм: 1) посчитать все варианты размещения нолей. 2) посчитать варианты размещения пар нолей 3) вычесть результат шага 2 из шага 1
import withoutTwoZeros from './withoutTwoZeros';
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
// Tecты для 4 задачи
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
import fizzBuzz from './fizzBuzz';
//Тесты для 5 задачи не написал




// Задача 6 Счастливые числа
import isHappyNumber from './isHappyNumber';
// Тесты для задачи 6
assert.equal(isHappyNumber(7), true); // должно вернуть true
assert.equal(isHappyNumber(798765432), 'A lot of iteration'); // должно вернуть 'A lot of iteration'




// Задача 7 Переворот числа
// Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.
import reverseInt from './reverseInt';
// Тесты для задачи 7
assert.equal(reverseInt(13), 31); // 31
assert.equal(reverseInt(-123), -321); // -321
assert.equal(reverseInt(0), 0); // 0
assert.equal(reverseInt(-1), -1); // -1
assert.equal(reverseInt(-10), -1); // -1
assert.equal(reverseInt(-9), -9); // -9
assert.equal(reverseInt(9), 9); // 9
assert.equal(reverseInt(930), 39); // 39




// Задача 8 Счастливый билет
import isHappyTicket from './isHappyTicket';
// Тесты для задачи 8
assert.equal(isHappyTicket(385916), true); // true
assert.equal(isHappyTicket(231002), false); // false
assert.equal(isHappyTicket(128722), true); // true
assert.equal(isHappyTicket('054702'), true); // true


// Задача 9 Разница углов
// Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.
import diff from './diffCorners';
// тесты к 9-й задаче
assert.equal(diff(2,6), 4);
assert.equal(diff(0, 45), 45) //=== 45;         // не 315, а 45, потому что 45 меньше
assert.equal(diff(0, 180), 180) //=== 180;
assert.equal(diff(0, 190), 170) //=== 170;       // не 190, а 170, потому что 170 меньше
assert.equal(diff(120, 280), 160) //=== 160;

// Задача 10 Фасад
// https://ru.hexlet.io/challenges/programming_basics_reexport
import * as math from './math';



// Задача 11 Идеальные числа
// Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
// Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). 
// Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
import isPerfect from './isPerfect';

assert.equal(isPerfect('6'), true); 
assert.equal(isPerfect('7b'), false); 
assert.equal(isPerfect('6b'), false); 
assert.equal(isPerfect(6), true); 
assert.equal(isPerfect(7), false); 
assert.equal(isPerfect(28), true); 
assert.equal(isPerfect(496), true);
assert.equal(isPerfect(196), false);





// Задача 12 Степень тройки
// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число 
// натуральной степенью тройки. Например, число 27 это третья степень (3^3), а 81 это четвертая (3^4).
import isPowerOfThree from './isPowerOfThree';

// Тесты для задачи 12
assert.equal(isPowerOfThree(1),true); // true (3^0)
assert.equal(isPowerOfThree(2),false); // false
assert.equal(isPowerOfThree(9),true); // true (3^2)
assert.equal(isPowerOfThree(27),true);
assert.equal(isPowerOfThree(30),false);


// Задача 13 Форматированное время
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) 
// и возвращает строку, являющуюся временем в формате чч:мм.
import formattedTime from './formattedTime';

// Тесты к задаче 13
assert.equal(formattedTime(5), '00:05'); // 00:05
assert.equal(formattedTime(15), "00:15"); // 00:15
assert.equal(formattedTime(60), "01:00"); // 01:00
assert.equal(formattedTime(67), "01:07"); // 01:07
assert.equal(formattedTime(175), "02:55"); // 02:55
assert.equal(formattedTime(600), "10:00"); // 10:00
assert.equal(formattedTime(754), "12:34"); // 12:34


// Задача 14 Функция Аккермана
import ackermann from './ackermann';

// Тесты к задаче 14
assert.equal(ackermann(0, 0), 1); // 1
assert.equal(ackermann(2, 1), 5); // 5
assert.equal(ackermann(2, 3), 9); // 9
assert.equal(ackermann(2, 5), 13); // 13
assert.equal(ackermann(3, 5), 253); // 253
assert.equal(ackermann(-1, 1), undefined); // undefined
assert.equal(ackermann(1, -1), undefined); // undefined





// Задача 15 Преобразование DNA в RNA
import dnaToRna from './dnaToRna';

// Tecты для задачи 15
assert.equal(dnaToRna('ACGTGGTCTTAA'), 'UGCACCAGAAUU'); // 'UGCACCAGAAUU'
assert.equal(dnaToRna('CCGTA'), 'GGCAU'); // 'GGCAU'
assert.equal(dnaToRna(''), ''); // ''
assert.equal(dnaToRna('ACTXUCA'), null); // null





// Числа Черча
import { Zero, Succ } from './numerals';


// Тесты для задачи "Числа Черча"

const two = Succ(Succ(Zero));
assert.equal( two(x => x + 1)(0), 2 ); // 2

const four = Succ(Succ(two));
assert.equal( four(x => x + 1)(0), 4 ); // 4