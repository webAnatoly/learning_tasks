// Практические задания из курса: "JS:Коллекции"
// https://ru.hexlet.io/courses/js_collections
// Задание: "Сборщик строки запроса"

// Функция принимает на вход список параметров bqs({ per: 10, page: 1, id: '1234' });
// и возвращает сформированный query string из этих параметров:
// page=1&per=10

// Имена параметров в выходной строке должны располагаться в алфавитном порядке 
// (то есть их нужно отсортировать)

export default (obj) => {

  const arr = [];
  let result = '';
  
  for (let key in obj) {
    let a = [];
    a.push(key);
    a.push(obj[key]);
    arr.push(a);
  }

  arr.sort((a,b) => a[0] > b[0]);

  for (let i = 0; i < arr.length; i++) {
    result += (arr[i+1]) ? `${arr[i][0]}=${arr[i][1]}&` : `${arr[i][0]}=${arr[i][1]}`
  }
  
  return result
}
