const prompt = require('prompt-sync')({sigint:true});

var Moeda = prompt('VOCÊ QUER CONVERTER O REAL PARA EURO / DOLLAR: ');
while (Moeda != 'EURO' && Moeda != 'euro' && Moeda != 'Euro' && Moeda != 'DOLÁR' && Moeda != 'dolár' && Moeda != 'Dolár') {
    console.log('ERRO!')
    var Moeda = prompt('VOCÊ QUER CONVERTER O REAL PARA EURO / DOLÁR: ');
}
if (Moeda == 'EURO' || Moeda == 'euro' || Moeda == 'Euro') {
    console.log('1 euro está valendo R$6,15')
    var reais = prompt('quantos reais você tem: ')
    var total = reais / 6.15
    console.log(`você tem ${total.toFixed(2)} euros`)
}
if (Moeda == 'DOLLAR' || Moeda == 'dollar' || Moeda == 'Dollar') {
    console.log('1 dolár está valendo R$5.54')
    var reais = prompt('quantos reais você tem: ')
    var total = reais / 5.54
    console.log(`você tem ${total.toFixed(2)} doláres`)
}