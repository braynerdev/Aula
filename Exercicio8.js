const prompt = require('prompt-sync')({sigint:true});

var Moeda = prompt('VOCÊ QUER CONVERTER O REAL PARA EURO / DOLÁR: ').toLocaleLowerCase();
while (Moeda != 'euro' && Moeda != 'dolár') {
    console.log('ERRO!')
    var Moeda = prompt('VOCÊ QUER CONVERTER O REAL PARA EURO / DOLÁR: ');
}
if (Moeda == 'euro') {
    console.log('1 euro está valendo R$6,15')
    var reais = prompt('quantos reais você tem: ')
    var total = reais / 6.15
    console.log(`você tem ${total.toFixed(2)} euros`)
} else {
    console.log('1 dolár está valendo R$5.54')
    var reais = prompt('quantos reais você tem: ')
    var total = reais / 5.54
    console.log(`você tem ${total.toFixed(2)} doláres`)
}

