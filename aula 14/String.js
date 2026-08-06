//uma forma de String //*

let umaString = "Um \"texto\""; 

console.log(umaString);

//
let outraString = "Um \\texto";

console.log(outraString);

//
     
//               01234567 //*
let eleString = "Um texto";

console.log(eleString[4]);

//

//               01234567 //*
let indString = "Um texto";

console.log(indString.charAt(6));

// outra forma de String //*
let concString = "Um texto";

console.log(concString.concat(' em', ' um', ' lindo dia.'));
console.log(concString.concat(' em um lindo dia.'));
console.log(concString + ' em um lindo dia.');
console.log(`${concString} em um lindo dia`);

//

//               01234567 'mostra que a palavra texto se encontra no indice "3", significa aonde que ele começa.' //*
let indiSting = "Um texto";

console.log(indiSting.indexOf('texto'));

//

//                01234567 : De tras para frente.
let lastString = "Um texto";

console.log(lastString.lastIndexOf('m' , 3));

//

// Ele busca todas as letras do texto que estão minusculas.
let matstring = "Um texto";

console.log(matstring.match(/[a-z]/g));

//

//Ele retorna o indice o que pedir sera encontrado, aqui no exemplo mostra que foi encontrado no Indice 1, pq o M se encontra no indice "1", ele busca letras minusculas.
let seaString = "Um texto";

console.log(seaString.search(/[a-z]/g));

//
// O 'seach' ele tambem aceita expressões regulares

let sioString = "Um texto";

// Busca letras maiúsculas
console.log(sioString.search(/[A-Z]/)); // 0 (encontra "U")

//

// Busca letras minúsculas
let seoString = "Um texto";

console.log(seaString.search(/[a-z]/)); // 1 (encontra "m")

//
let replaString = "Um texto";

console.log(replaString.replace('Um', 'Outro')); // pode usar tambem /Um/, que funciona da mesma forma

//

let repString = "O rato roeu a roupa do rei de roma.";

console.log(repString.replace(/r/g, '#'));

//

let lenString = "O rato roeu a roupa do rei de roma.";

console.log(lenString.length); // aqui mostra que tem 35 caracteres.

//

let sliString = "O rato roeu a roupa do rei de roma.";

console.log(sliString.slice(2, 6));// ele busca pelo indice.

//

let slicString = "O rato roeu a roupa do rei de roma.";

console.log(slicString.slice(-5, slicString.length -1)); // tem essa forma //

//

let sliccString = "O rato roeu a roupa do rei de roma.";

console.log(sliccString.slice(-5, -1)); // como tambem tem essa forma

//

let spliStrint = "O rato roeu a roupa do rei de roma.";

console.log(spliStrint.split(' ', 5));
