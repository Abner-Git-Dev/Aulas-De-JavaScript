/*
Primitivos (imutáveis) - String , number , boolean, undefined, 
null (bigint, symbol) - valores copiados


referencia (mutavel) - array, object , function - passados por referencia 

{...a} = isso faz com que os valores sejam independentes;

*/


let a = 'A';

let b = a;  // Cópia do valor


          //b recebe uma cópia do valor de a , Eles são independentes.


a = 'Outra coisa';
console.log(a, b);  // 'Outra coisa', 'A'


//

let a = [1, 2, 3];
                           //referencia (mutavel)
let b = a;

a.push(4);

console.log(a, b);

b.pop()
console.log(a, b);

//

let a = [1, 2, 3];

let b = [...a];

let c = b;


console.log(a, b);

a.push(4);
console.log(a, b);

b.pop()
console.log(a, b);

a.push('Luiz');

console.log(a, b, c);

//

const a = {
   nome: 'Luiz',
   sobrenome: 'Miranda'


};

const b = {...a};   // usando { } 'chaves' isso torna a variavel 'b' independente 

a.nome = 'João';

console.log(a);
console.log(b);


//