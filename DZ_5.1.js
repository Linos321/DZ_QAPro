function pow(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(pow(2, 5));
console.log(pow(3, 8));
console.log(pow(2, 7));