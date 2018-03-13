const isPerfect = (number) => {
  number = +number;
  if (number <= 1 || typeof number != "number" || isNaN(number)) return false;
  
  const arr = [1];

  for (let i = 2; i < number; i++) {
    if (number % i == 0) arr.push(i);
  }
  return arr.reduce((a,b) => a + b) == number;
}

export default isPerfect;