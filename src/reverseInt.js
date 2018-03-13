const reverse = str => {
  if (str.length == 1) return str; 
  let newString = str[str.length-1]; // при каждом вызове последний символ записываем в переменную newString
  return newString += reverse( str.substring(0, str.length-1) ); // в каждый новый вызов передаем строку без последнего символа
}

const reverseInt = (number) => {
  if (number > -10 && number < 10) return number;

  let str = String(number);

  if (str[0] == '-') {
    return parseInt(`-${reverse( str.substring(1) )}`);
  } else {
    return parseInt(reverse(str));
  }
}
export default reverseInt;