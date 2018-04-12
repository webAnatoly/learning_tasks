// тренировка асинхронного прграммирования

import fs from 'fs';
import path from 'path';

import hexletAsync from './hexletAsync';

let myFile = path.join(__dirname, '../../', '/files/test');
let test2 = path.join(__dirname, '../../', '/files/test2');

// Реализация чтения и записи файла с использованием waterfall
// const functions = [
//   cb => fs.readFile(myFile, (err, body) => {
//     let updatedBody;
//     if (!err) {
//       if (body.length > 0) {
//         updatedBody = `${body}\nAppend something!`;
//       } else {
//         updatedBody = `First string!`;
//       }
//     }
//     // setTimeout(cb, 1000, err, body);
//     cb(err, updatedBody);
//   }),
//   (body, cb) => fs.writeFile(myFile, body, err => {
//     cb(err);
//   }),
// ];
// hexletAsync.waterfall(functions, err => {
//   if (err) {
//     return console.log(err);
//   }
// });

const openFiles = [
  'https://gist.github.com/webAnatoly/44f94831200cfcfe21036a3ec93677ab.js',
  'https://gist.github.com/webAnatoly/9eb0fde95418da2ce68fea6b1be306ad.js',
  myFile
];

// пример использования асинхронного метода each
hexletAsync.each(openFiles, (file, callback) => {
  if (file.length > 90) {
    console.log('file length', file.length);
    callback('File name too long');
  } else {
    // Здесь предпологается какая-то операция над файлом(элементом); 
    console.log('File processed');
    callback();
  }
}, err => {
  if (err) {
    console.log('A file failed to process');
  } else {
    console.log('All files have been processed success');
  }
});


// ======== Реализация чтения и записи файла посредством обычных колбеков.

// fs.readFile(myFile, 'utf8', (err, body) => {
//   if (err) {
//     console.log('случилась какая-то ошибка');
//     console.log(err.message);
//     return;
//   }

//   console.log('Это содержимое файла \n', body);

//   let updatedBody;

//   if (body.length > 0) {
//     updatedBody = `${body}\nAppend something!`;
//   } else {
//     updatedBody = `First string!`;
//   }

//   fs.writeFile(myFile, updatedBody, err => {
//     if (err) {
//       console.log('ошибка на этапе записи файла');
//       console.log(err.message);
//     }
//   });
// });


// EventEmitter
import EventEmitter from 'events';

class Clock extends EventEmitter {
  start() {
    let tic = true;
    this.interval = setInterval(() => {
      const event = tic ? 'tic' : 'toc';
      this.emit(event, 'мои данные или функция (колбэк). Например Date.now()');
      tic = !tic;
    }, 1000);
  }
  stop() {
    clearInterval(this.interval);
  }
}

const clock = new Clock();

clock.start();

clock.on('tic', (t) => console.log('tic', t));
clock.on('toc', (t) => console.log('toc', t));

setTimeout(clearInterval, 4000, clock.interval);

// Практическое задание "Асинхронное детектирование"
import detect from './detect';

const copiedPaths = openFiles.slice(); 

copiedPaths.push(test2);

detect(copiedPaths, (filePath, callback) => {
  fs.access(filePath, err => {
    callback(filePath, !err);
  });
}, (err, result) => {
  // result now equals the first file in the list that exists
});





// Практическое задание "Асинхронная сортировка" из курса https://ru.hexlet.io/courses/js_async
import sortBy from './sortBy';

sortBy([myFile, test2], (file, callback) => {
  fs.stat(file, (err, stats) => {
    if (!err) {
      callback(err, stats.mtime);
     } else { callback(err); }
  });
}, (err, results) => {
  console.log('results: ', results);
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