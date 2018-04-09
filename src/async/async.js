// тренировка асинхронного прграммирования

import fs from 'fs';
import path from 'path';

import hexletAsync from './hexletAsync';

const myFile = path.join(__dirname, '../../', '/files/test');

const functions = [
  cb => fs.readFile(myFile, (err, body) => {
    let updatedBody;
    if (!err) {
      if (body.length > 0) {
        updatedBody = `${body}\nAppend something!`;
      } else {
        updatedBody = `First string!`;
      }
    }
    // setTimeout(cb, 1000, err, body);
    cb(err, updatedBody);
  }),
  (body, cb) => fs.writeFile(myFile, body, err => {
    cb(err);
  }),
];
hexletAsync.waterfall(functions, err => {
  if (err) {
    return console.log(err);
  }
});

// ============================


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


