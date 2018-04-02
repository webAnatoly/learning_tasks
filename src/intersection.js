// Функция находит пересечение двух массивов. 
// Пересечение двух массивов A и B — это массив только с теми элементами A и B, 
// которые одновременно принадлежат обоим массивам, без дублей.

// intersection([2, 1], [2, 3]);
// → [2]

// intersection([3, 1, 3], [3, 3, 2]);
// → [3]

export default (arr1, arr2) => {
  
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const result = [];
  
  set1.forEach(element => { 
    if (set2.has(element)) { result.push(element) }
  });

  return result;

}