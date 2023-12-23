"use strict";
let celciusTemperature = [10, 20, 30, 40, 50];
let fahrenheitTemperature = [];
for (let i = 0; i < celciusTemperature.length; i++) {
    let celciusToFahrenheit = (9 / 5) * celciusTemperature[i] + 32;
    fahrenheitTemperature.push(celciusToFahrenheit);
}
console.log(`Temperatures in Celcius:${celciusTemperature} ℃`);
console.log(`Celcius emperatures in Fahrenheit:${fahrenheitTemperature} ℉`);
