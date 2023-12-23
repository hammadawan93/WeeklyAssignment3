const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

function sumOfAll(a: number[]) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    s = s + a[i];
  }
  return s;
}

console.log(sumOfAll(arrayOfNumbers));
