const prompt = require('prompt-sync')();

var Nota1 = parseFloat(prompt("digite a primeira nota: "))
var Nota2 = parseFloat(prompt("digite a segunda nota: "))
var Nota3 = parseFloat(prompt("digite a terceira nota: "))
var media = ((Nota1 + Nota2 + Nota3) / 3).toFixed(2)
console.log(`O resultado da média é ${media}`)