let numbersArray = [-3, -2, -1, 0, 1, -9, 2, 3, -4, 3, 9, -5];
let negativeNumbersArray: number[] = [];

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] < 0) {
    negativeNumbersArray.push(numbersArray[i]);
  }
}
console.log(`Original Array:${numbersArray}`);
console.log(`Negative Numbers Array:${negativeNumbersArray}`);
