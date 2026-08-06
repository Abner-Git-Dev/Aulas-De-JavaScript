/*
Primitivos (imutáveis) - String , number , boolean, undefined, 
null (bigint, symbol) - valor



*/


let a = 'A';

let b = a;  // Cópia do valor


          //b recebe uma cópia do valor de a , Eles são independentes.


a = 'Outra coisa';
console.log(a, b);  // 'Outra coisa', 'A'


//
