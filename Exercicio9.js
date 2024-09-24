const prompt = require('prompt-sync')({sigint:true});

var Cel = parseInt(prompt('Digite sua temperatura em celsius: '));
var far = ((Cel * 9/5) + 32).toFixed(1);

console.log(`${Cel} graus Celsius = ${far} Fahrenheit`)