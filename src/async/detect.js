// Практическое задание "Асинхронное детектирование" из курса https://ru.hexlet.io/courses/js_async
// Реализуйте и экспортируйте по умолчанию функцию detect, которая возвращает первый результат, который не был ошибкой.
// Функция detect должна запускать колбек на выполнение сразу для всех входящих параметров, а не последовательно.
// Это значительно увеличивает скорость ее выполнения.

  // async.detect(['file1', 'file2', 'file3'], (filePath, callback) => {
  //   fs.access(filePath, err => {
  //     callback(null, !err)
  //   });
  // }, (err, result) => {
  //   // result now equals the first file in the list that exists
  // });

  const detect = (arr, fn, result) => {

    let flag = true;

    const callback = (file, noErr) => {
      if (noErr) {
        if (flag) { 
          result(null, file);
          flag = false;
        }
      }
    }

    arr.forEach((n) => {
      setTimeout(fn, 0, n, callback); // запуск функции fn для всех элементов arr одновременно. 
    });
  }

  export default detect;