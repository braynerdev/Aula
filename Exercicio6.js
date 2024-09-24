const prompt = require('prompt-sync')({sigint:true});

var valor = parseFloat(prompt("Insira o valor do produto: "));

var percentDescont = parseFloat(prompt("Insira o percentual de desconto: "));

while ((percentDescont>=100 || percentDescont<0)) {
    var percentDescont = parseFloat(prompt
        ("Insira o percentual de desconto: "));
}

var desconto = (valor/100) * percentDescont
var valorDesconto = valor - desconto

console.log(`O valor inicial do produto é R$${valor} e o desconto é de ${percentDescont}%(R$${desconto}) resultano no valor final de ${valorDesconto.toFixed(2)}`)