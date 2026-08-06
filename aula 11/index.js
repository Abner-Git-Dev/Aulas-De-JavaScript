/*
 *() elevação de precedencia
 * Aritméticos 
 * + Adição / concatenação (- / *)
 * - / * , 
 * ** potenciação
 * % Resto da divisão
 * contador++ / ++contador = pré ele primeiro ele faz a conta e depois ele faz o retorno da conta, pos ele executa 
   primeiro ação e depois ele faz o ecremento do valor;
 * (--) Decremento (++) incremento
 * Operadores de Atribuição
 * //pode ser usado em qualquer aritmetico + , - , *, /. //*
 * NaN - Not a number
 * parseInt (Inteiro) , parseFloat(Decimais) , Number 
*/
const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log((num1 + num2) * num3);

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log(contador)

let pré = 1;

console.log(++pré);
console.log(pré);

let pós = 1;

console.log(pós++);
console.log(pós);

let sub = 10;

console.log(--sub);
console.log(--sub);

let sub1 = 10;

console.log(sub1--);
console.log(sub1);

//ideal fazer primeiro o incremento e depois pedir para o console.log mostrar o valor que ele tem.
let incremento = 0;
incremento++;

console.log(incremento);
//melhor forma para programar.

const passo = 3;
let cont = 1;
cont = cont + passo;

console.log(cont)

//


//*

let cont1 = 0;
cont1 += 2;
cont1 += 2;
cont1 += 2; //pode ser usado em qualquer aritmetico + , - , *, /. //*

console.log(cont1);

//NaN - Not a number

const test = 10;
const test1 = 'luiz';

console.log(test * test1);

//

const par = 10;
const par1 = parseInt('5');

console.log(par + par1);

//

const flo = 10;
const flo1 = parseFloat('5.2');

console.log(flo + flo1);

//

const numb = 10;
const numb1 = Number('5.2');

console.log(numb + numb1);