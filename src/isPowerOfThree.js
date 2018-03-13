export default number => {
  if (number == 1) return true;
  
  let test = 1;

  while (test < number) {
    test *= 3;
    if (test == number) return true;  
  }

  return false;
}