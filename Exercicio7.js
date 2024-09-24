const prompt = require('prompt-sync')({sigint:true});
/*Faixa 1: Até R$ 2.112: isento.
Faixa 2: De 2.112,01 até 2.826,66: 7,5%
Faixa 3: De 2.826,67 até 3.751,06: 15%
Faixa 4: De 3.751,07 até 4.664,68: 22,5%
Faixa 5: Acima de R$ 4.664,68: 27,5%
8 de mai. de 2024*/

var SalarioBruto = parseFloat(prompt('digite o seu salário: '));
var Salario = 0.0
if(SalarioBruto <= 2112.00){
    Salario = SalarioBruto;
}
if (SalarioBruto > 2112.00 && SalarioBruto <= 2826.66){
    Salario = SalarioBruto - (SalarioBruto / 100 * 7.5)
}
if (SalarioBruto > 2826.66 && SalarioBruto <= 3751.06){
    Salario = SalarioBruto - (SalarioBruto/100*15)
}
if (SalarioBruto > 3751.06 && SalarioBruto <= 4664.68) {
    Salario = SalarioBruto - (SalarioBruto/100*22.5)
}
if (SalarioBruto > 4664.68){
    Salario = SalarioBruto - (SalarioBruto/100*27.5)
} 

console.log(`seu salário é R$${Salario.toFixed(2)}`)