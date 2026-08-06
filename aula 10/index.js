// String, number, undefined, null, boolean, symbol
const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined = não aponta para local nenhuma na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhuma na memória
const aprovado = false; // Boolean = true, false (Lógico)


console.log(typeof sobrenomeAluno, sobrenomeAluno);

let a = [1 , 2];
let b = a

console.log(a , b);

b.push(3 , 4 , 5)
console.log(a, b)