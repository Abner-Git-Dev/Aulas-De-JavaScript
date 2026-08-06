//Transformar a variavel de String para Number.

alert ('Com a nossa mensagem.');

const num1 = Number(prompt('Digite um numero:'));
const num2 = Number(prompt('Digite outro numero:'));

let resultado = num1 + num2;
alert ('O resultado é:' +  resultado);


// Outro jeito de fazer

const num1 = prompt('Digite um Numero:');
const num2 = prompt('Digite outro Numero:');

let numb = Number(num1);
let numb1 = Number(num2);

let resultado = numb + numb1;
alert ('O resultado é :' + resultado);

// Outra explicação

let num1 = prompt('Digite um Numero:');
let num2 = prompt('Digite outro Numero:');

num1 = Number(num1);
num2 = Number(num2);

let resultado = num1 + num2;
alert ('O resultado é:' + resultado);

// Outro exemplo usando o "$" é um codigo mais explicito

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);

alert (`O resultado é : ${num1 + num2}`);