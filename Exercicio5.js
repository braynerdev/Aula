const prompt = require('prompt-sync')({sigint:true});

const Nota1 = parseFloat(prompt("primeira nota: "));
const Nota2 = parseFloat(prompt("segunda nota: "));
const Nota3 = parseFloat(prompt("terceira nota: "));
const Media = ((Nota1 + Nota2 + Nota3) / 3).toFixed(2)
console.log(`O resultado da média é ${Media}`);