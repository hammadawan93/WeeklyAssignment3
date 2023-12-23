"use strict";
let array = ["Ali", "Ahmed", "Zain"];
console.log(array);
function insertValue(a, i, v) {
    a.splice(i, 1, v);
    //console.log(a);
    return a;
}
console.log(insertValue(array, 1, "Hamid"));
