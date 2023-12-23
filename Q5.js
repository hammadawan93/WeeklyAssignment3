"use strict";
function factorial(n) {
    if (n > 0) {
        let f = 1;
        for (let i = 1; i <= n; i++) {
            f = f * i;
        }
        return f;
    }
    else {
        console.log(`Number must be a positive integer!`);
    }
}
console.log(factorial(5));
console.log(factorial(10));
