// Реализуйте функцию enlargeArrayImage, которая принимает изображение в виде двумерного массива и увеличивает его в два раза.


// const arr = [
//   ['*','*','*','*'],
//   ['*',' ',' ','*'],
//   ['*',' ',' ','*'],
//   ['*','*','*','*']
// ];

// ****
// *  *
// *  *
// ****

// enlargeArrayImage(arr);
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********

export default (arr) => {
  const result = [];
  arr.map((innerArr) => {
    const tempArr = [];
    innerArr.map((n) => {
      tempArr.push(n);
      tempArr.push(n);
    });
    result.push(tempArr);
    result.push(tempArr);
  });

  return result;
}