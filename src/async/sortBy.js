// Практическое задание "Асинхронная сортировка" из курса https://ru.hexlet.io/courses/js_async

/*

Примеры использования функции sortBy

sortBy(['file1', 'file2', 'file3'], (file, callback) => {
  fs.stat(file, (err, stats) => {
    callback(err, stats.mtime);
  });
}, (err, results) => {
  // results is now the original array of files sorted by
  // modified date
});

// By modifying the callback parameter the
// sorting order can be influenced:

// ascending order
sortBy([1, 9, 3, 5], (x, callback) => {
  callback(null, x);
}, (err, result) => {
  // result callback
});

// descending order
sortBy([1, 9, 3, 5], (x, callback) => {
  callback(null, x * -1); //<- x*-1 instead of x, turns the order around
}, (err, result) => {
  // result callback
});

*/

export default (arr, fn, result) => {
  const newArr = [];
  const map = new Map();
  let counter = 0;

  const once = (f) => {
    let flag = true;
    return (...args) => {
      if (flag) {
        f(...args);
        flag = false;
      }
    }
  }

  const onceResult = once(result);

  arr.forEach((key) => {
    const callback = (err, value) => {
      if (!err) {
        map.set(key, value); 
      } else {
        // тут надо определиться что делать в случае ошибки. 
        // Прекращать обработку файлов или обрабатывать оставшиеся. 
        // Пока что буду прекращать обработку. И в случае ошибки передавать в результурующею функцию пустой массив.
        // Так как ошибок может быть несколько, надо сделать, чтобы результирующая функция вызывалась один раз, лишь при первой ошибке.
        onceResult (err, []); 
      }
      counter += 1;
      if (counter == arr.length) { // если элемент последний в массиве, то:
        let arrForSorting = Array.from(map); // преобразовываем Map в Array
        
        // сортируем его
        arrForSorting.sort((a,b) => {
          return a[1] > b[1];
        });

        let resultArr = arrForSorting.map((n) => {return n[0]});

        // вызываем финальную функцию result и передаем ей итоговый массив
        onceResult(err, resultArr);
      }
    }
    setTimeout(fn, 0, key, callback);
  });

  // console.log(map);

}
