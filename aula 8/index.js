const nome = "Luiz Otávio";
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc; 
let anoNascimento = 1980;
let Resultadoimc = peso / (altura * altura)
let resultadoidade = 2026 - idade - 1



console.log( nome,sobrenome,'tem',idade,'anos', 'pesa',peso,'kg', 'tem', altura, 'e seu IMC é de',Resultadoimc ,nome, 'nasceu em', resultadoidade);

// template strings

console.log (nome + ' ' + sobrenome + ' tem' + idade + ' anos, pesa ' + peso + ' kg');
console.log (`tem ${altura} de altura e seu IMC é de ${Resultadoimc}`);