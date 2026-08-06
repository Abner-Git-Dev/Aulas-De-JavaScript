//IEEE 754-2008
//

let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);

//
// Como alterar um numero "Number" para uma 'String';

let numb1 = 1;

numb1 = numb1.toString();

console.log(typeof numb1);

//
// Transformar em um numero binário;

let numm1 = 10;

console.log(numm1.toString(2));

// Aqui vc escolhe quantas casa Decimais voce quer, ele arredonda para 2 casas decimais.

let nuum1 = 10.5789551255547

console.log(nuum1.toFixed(2));

//

//Aqui mostra se o numero é inteiro "true"= numero inteiro, "False"= numero não inteiro;

let linum1 = 10;
let linum2 = 2.5;

console.log(Number.isInteger(linum1));

//

//Aqui mostra se o numero é uma conta NaN:
//true = o valor é NaN (Not a Number) - conta inválida
//false = o valor é um número válido

let temp = 10 * '5';

console.log(Number.isNaN(temp));

//

//Pode ser usado o parseFloat como tambem o 'Number';

let nummb1 = 0.7;
let nummb2 = 0.1;

nummb1 +=nummb2; // 0.8
nummb1 +=nummb2; // 0.9
nummb1 +=nummb2; // 1.0

nummb1 = parseFloat(nummb1.toFixed(2));


console.log(nummb1);
console.log(Number.isInteger(nummb1));

//

// Tem como fazer dessa maneira tambem;

let nnum1 = 0.7;
let nnum2 = 0.1;

nnum1 =  ((nnum1 * 100) + (nnum2 * 100)) / 100; // 0.8
nnum1 =  ((nnum1 * 100) + (nnum2 * 100)) / 100; // 0.9
nnum1 =  ((nnum1 * 100) + (nnum2 * 100)) / 100; // 1.0

console.log(nnum1);
