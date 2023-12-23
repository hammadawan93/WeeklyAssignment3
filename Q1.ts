let array: string[] = ["Ali", "Ahmed", "Zain"];
console.log(array);

function insertValue(a: string[], i: number, v: string) {
  a.splice(i, 1, v);
  //console.log(a);
  return a;
}

console.log(insertValue(array, 1, "Hamid"));
