// Задача 1 Инвертированный регистр
// Реализуйте функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
export default str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase() ? result += str[i].toLowerCase() : result += str[i].toUpperCase();
  }
  return result;
}