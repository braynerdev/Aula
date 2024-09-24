const prompt = require('prompt-sync')({sigint:true});
var Peso = parseFloat(prompt('digite seu peso em quilogramas: '))
var Altura = parseFloat(prompt('digite sua aaltura em metros: '))
var Imc = (Peso / (Altura*Altura)).toFixed(2)
console.log(`seu indice de massa corporal é de ${Imc}`)