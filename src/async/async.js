// тренировка асинхронного прграммирования

import fs from 'fs';
import hexletAsync from './hexletAsync';

const myFile = '/home/tolik/Projects/hexlet/src/async/test';

const functions = [
  cb => fs.readFile(myFile, (err, body) => {
    let updateBody;
    if (body.length > 0) {
      updateBody = `${body}\nAppend something!`;
    } else {
      updateBody = `First string!`;
    }
    cb(err, `${updateBody}\nAppend something!`);
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

//   let updateBody;

//   if (body.length > 0) {
//     updateBody = `${body}\nAppend something!`;
//   } else {
//     updateBody = `First string!`;
//   }

//   fs.writeFile(myFile, updateBody, err => {
//     if (err) {
//       console.log('ошибка на этапе записи файла');
//       console.log(err.message);
//     }
//   });
// });


