/* ================================================================
   STRINGS EM JAVASCRIPT — GUIA COMPLETO DE ESTUDO
   ----------------------------------------------------------------
   Uma STRING é um texto entre aspas ('texto', "texto" ou `texto`).
   Ela funciona como uma lista de caracteres, onde cada letra tem
   uma posição (ÍNDICE), começando sempre do 0.

   Exemplo: "Um texto" -> U=0 m=1 (espaço)=2 t=3 e=4 x=5 t=6 o=7
   ================================================================ */


/* ----------------------------------------------------------------
   1) ASPAS DENTRO DE STRING (escape com \")
   O QUE FAZ: permite colocar aspas duplas DENTRO de uma string
   que também usa aspas duplas, sem fechar a string sem querer.
---------------------------------------------------------------- */
let umaString = "Um \"texto\"";
console.log(umaString); // Um "texto"


/* ----------------------------------------------------------------
   2) BARRA INVERTIDA (escape com \\)
   O QUE FAZ: representa uma única barra invertida (\) literal
   dentro da string.
---------------------------------------------------------------- */
let outraString = "Um \\texto";
console.log(outraString); // Um \texto


/* ----------------------------------------------------------------
   3) COLCHETES [indice]
   O QUE FAZ: pega A LETRA que está numa posição (índice)
   específica. Mesma função do charAt().
---------------------------------------------------------------- */
let eleString = "Um texto";
console.log(eleString[4]); // "e"


/* ----------------------------------------------------------------
   4) .charAt(indice)
   O QUE FAZ: retorna A LETRA que está numa posição específica
   que você já sabe.
---------------------------------------------------------------- */
let indString = "Um texto";
console.log(indString.charAt(6)); // "t"


/* ----------------------------------------------------------------
   5) .concat() / + / template string
   O QUE FAZ: JUNTA (concatena) strings, criando uma nova string.
   As três formas abaixo fazem a mesma coisa.
---------------------------------------------------------------- */
let concString = "Um texto";
console.log(concString.concat(' em', ' um', ' lindo dia.'));
console.log(concString.concat(' em um lindo dia.'));
console.log(concString + ' em um lindo dia.');
console.log(`${concString} em um lindo dia`);


/* ----------------------------------------------------------------
   6) .indexOf(letra/palavra)
   O QUE FAZ: DESCOBRE em qual posição uma letra ou palavra
   aparece PELA PRIMEIRA VEZ. Se não encontrar, retorna -1.
---------------------------------------------------------------- */
let indiSting = "Um texto";
console.log(indiSting.indexOf('texto')); // 3


/* ----------------------------------------------------------------
   7) .lastIndexOf(letra, posicaoLimite)
   O QUE FAZ: igual ao indexOf, mas busca DE TRÁS PRA FRENTE,
   achando a ÚLTIMA ocorrência. O segundo parâmetro (opcional)
   limita até onde ele pode procurar.
---------------------------------------------------------------- */
let lastString = "Um texto";
console.log(lastString.lastIndexOf('m', 3)); // 1


/* ----------------------------------------------------------------
   8) .match(regex)
   O QUE FAZ: retorna um ARRAY com TODAS as ocorrências que
   combinam com a expressão regular. Aqui pega todas as letras
   minúsculas.
---------------------------------------------------------------- */
let matstring = "Um texto";
console.log(matstring.match(/[a-z]/g)); // ['m','t','e','x','t','o']


/* ----------------------------------------------------------------
   9) .search(regex)
   O QUE FAZ: retorna o ÍNDICE da primeira ocorrência que
   combina com a expressão regular (retorna número, não array).
---------------------------------------------------------------- */
let seaString = "Um texto";
console.log(seaString.search(/[a-z]/g)); // 1 (primeira minúscula: "m")

let sioString = "Um texto";
console.log(sioString.search(/[A-Z]/)); // 0 (encontra "U")


/* ----------------------------------------------------------------
   10) .replace(procurado, novo)
   O QUE FAZ: TROCA um trecho por outro. Substitui só a
   PRIMEIRA ocorrência, a menos que use regex com /g para
   trocar TODAS as ocorrências.
---------------------------------------------------------------- */
let replaString = "Um texto";
console.log(replaString.replace('Um', 'Outro')); // "Outro texto"

let repString = "O rato roeu a roupa do rei de roma.";
console.log(repString.replace(/r/g, '#')); // troca todos os "r"


/* ----------------------------------------------------------------
   11) .length
   O QUE FAZ: conta quantos caracteres a string tem
   (incluindo espaços). É uma PROPRIEDADE, não usa parênteses.
---------------------------------------------------------------- */
let lenString = "O rato roeu a roupa do rei de roma.";
console.log(lenString.length); // 36


/* ----------------------------------------------------------------
   12) .slice(inicio, fim)
   O QUE FAZ: RECORTA um pedaço da string usando índices que
   você já sabe. Aceita números negativos, que contam a partir
   do final da string.
---------------------------------------------------------------- */
let sliString = "O rato roeu a roupa do rei de roma.";
console.log(sliString.slice(2, 6)); // "rato"

let slicString = "O rato roeu a roupa do rei de roma.";
console.log(slicString.slice(-5, slicString.length - 1));

let sliccString = "O rato roeu a roupa do rei de roma.";
console.log(sliccString.slice(-5, -1)); // mesmo resultado, forma mais enxuta


/* ----------------------------------------------------------------
   13) .split(separador, limite)
   O QUE FAZ: QUEBRA a string em pedaços, transformando em um
   ARRAY (lista). O segundo parâmetro (opcional) limita quantos
   itens o array vai ter.
---------------------------------------------------------------- */
let spliStrint = "O rato roeu a roupa do rei de roma.";
console.log(spliStrint.split(' ', 5)); // primeiras 5 palavras


/* ----------------------------------------------------------------
   14) .join(separador)
   O QUE FAZ: é o OPOSTO do split — pega um ARRAY e JUNTA tudo
   de novo em uma única string, usando o separador escolhido.
---------------------------------------------------------------- */
console.log(["Abner", "Silva"].join(' - ')); // "Maria - Silva"


/* ----------------------------------------------------------------
   15) .toLocaleUpperCase()
   O QUE FAZ: transforma TODA a string em MAIÚSCULAS,
   respeitando as regras do idioma (locale) do ambiente.
---------------------------------------------------------------- */
let upperString = "Um texto";
console.log(upperString.toLocaleUpperCase()); // "UM TEXTO"


/* ----------------------------------------------------------------
   16) .toLowerCase()
   O QUE FAZ: transforma TODA a string em minúsculas.
---------------------------------------------------------------- */
let lowerString = "Um Texto";
console.log(lowerString.toLowerCase()); // "um texto"


/* ================================================================
   RESUMO RÁPIDO — UMA FRASE PARA CADA MÉTODO
   ----------------------------------------------------------------
   \"  \\             -> escapes: colocam aspas e barra invertida dentro da string
   []  / .charAt()    -> PEGA a letra de uma posição que você já sabe
   .concat() / + / `` -> JUNTA strings
   .indexOf()          -> ACHA a posição da 1ª vez que a letra/palavra aparece
   .lastIndexOf()       -> ACHA a posição da ÚLTIMA vez que a letra aparece
   .match()             -> retorna TODAS as ocorrências de uma regex (array)
   .search()            -> retorna o ÍNDICE da 1ª ocorrência de uma regex
   .replace()           -> TROCA um trecho por outro
   .length              -> CONTA quantos caracteres tem
   .slice()             -> RECORTA um pedaço do texto
   .split()             -> QUEBRA o texto em pedaços (array)
   .join()              -> JUNTA os pedaços de volta em texto
   .toLocaleUpperCase() -> deixa TUDO MAIÚSCULO
   .toLowerCase()       -> deixa tudo minúsculo
   ================================================================ */