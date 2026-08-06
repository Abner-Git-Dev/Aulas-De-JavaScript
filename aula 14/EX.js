/* ==========================================================
   MÉTODOS E PROPRIEDADES DE STRING EM JAVASCRIPT
   Cada bloco abaixo demonstra UM comando isoladamente,
   com comentário explicando o que ele faz.
   ========================================================== */


/* ----------------------------------------------------------
   1. ASPAS DENTRO DE STRING (escape com \")
   Usa-se \" para inserir aspas duplas dentro de uma string
   que também é delimitada por aspas duplas.
---------------------------------------------------------- */
let umaString = "Um \"texto\"";
console.log(umaString); // Um "texto"


/* ----------------------------------------------------------
   2. BARRA INVERTIDA (escape com \\)
   Usa-se \\ para representar uma barra invertida literal.
---------------------------------------------------------- */
let outraString = "Um \\texto";
console.log(outraString); // Um \texto


/* ----------------------------------------------------------
   3. ACESSO POR ÍNDICE ([ ])
   Cada caractere da string tem uma posição (índice),
   começando do 0. Usa-se colchetes para acessar diretamente.

   índices:  0 1 2 3 4 5 6 7
   string:   U m   t e x t o
---------------------------------------------------------- */
let eleString = "Um texto";
console.log(eleString[4]); // "e" (posição 4)


/* ----------------------------------------------------------
   4. charAt(indice)
   Faz a mesma coisa que os colchetes [ ], mas é um método
   (uma função). Retorna o caractere na posição informada.
---------------------------------------------------------- */
let indString = "Um texto";
console.log(indString.charAt(6)); // "t" (posição 6)


/* ----------------------------------------------------------
   5. concat(...partes)
   Junta (concatena) uma ou mais strings à string original.
   Não altera a string original, retorna uma nova.
---------------------------------------------------------- */
let concString = "Um texto";
console.log(concString.concat(' em', ' um', ' lindo dia.'));
console.log(concString.concat(' em um lindo dia.'));
console.log(concString + ' em um lindo dia.');       // + faz o mesmo que concat
console.log(`${concString} em um lindo dia`);         // template literal também concatena


/* ----------------------------------------------------------
   6. indexOf(substring)
   Retorna o ÍNDICE (posição) onde a substring COMEÇA
   dentro da string. Se não encontrar, retorna -1.

   índices:  0 1 2 3 4 5 6 7
   string:   U m   t e x t o
   "texto" começa no índice 3.
---------------------------------------------------------- */
let indiSting = "Um texto";
console.log(indiSting.indexOf('texto')); // 3


/* ----------------------------------------------------------
   7. lastIndexOf(caractere, posiçãoLimite)
   Busca de TRÁS PARA FRENTE a partir da posição informada
   (ou do fim da string, se não informar).
   Retorna o índice da última ocorrência encontrada.
---------------------------------------------------------- */
let lastString = "Um texto";
console.log(lastString.lastIndexOf('m', 3)); // procura "m" de trás pra frente, até o índice 3


/* ----------------------------------------------------------
   8. match(regex)
   Retorna um array com todas as ocorrências que combinam
   com a expressão regular informada.
   Aqui: todas as letras minúsculas (a-z), globalmente (/g).
---------------------------------------------------------- */
let matstring = "Um texto";
console.log(matstring.match(/[a-z]/g)); // ['m', 't', 'e', 'x', 't', 'o']


/* ----------------------------------------------------------
   9. search(regex)
   Retorna o ÍNDICE da PRIMEIRA ocorrência que combina com
   a expressão regular. Diferente do match, retorna só
   uma posição (número), não um array.
---------------------------------------------------------- */
let seaString = "Um texto";
console.log(seaString.search(/[a-z]/g)); // 1 (primeira letra minúscula: "m")

let sioString = "Um texto";
console.log(sioString.search(/[A-Z]/)); // 0 (encontra "U", maiúscula)


/* ----------------------------------------------------------
   10. replace(alvo, substituto)
   Substitui a PRIMEIRA ocorrência do alvo pelo texto novo.
   O alvo pode ser texto simples ou expressão regular.
   Sem a flag /g, substitui só a primeira ocorrência.
---------------------------------------------------------- */
let replaString = "Um texto";
console.log(replaString.replace('Um', 'Outro')); // "Outro texto"

let repString = "O rato roeu a roupa do rei de roma.";
console.log(repString.replace(/r/g, '#')); // troca TODOS os "r" (por causa do /g)


/* ----------------------------------------------------------
   11. length
   Propriedade (não é função, não usa parênteses) que retorna
   a quantidade de caracteres da string.
---------------------------------------------------------- */
let lenString = "O rato roeu a roupa do rei de roma.";
console.log(lenString.length); // quantidade de caracteres


/* ----------------------------------------------------------
   12. slice(inicio, fim)
   Extrai um PEDAÇO da string entre os índices informados.
   O índice final NÃO é incluído.
   Aceita índices negativos, que contam a partir do fim.
---------------------------------------------------------- */
let sliString = "O rato roeu a roupa do rei de roma.";
console.log(sliString.slice(2, 6)); // "rato" (do índice 2 até o 5)

let slicString = "O rato roeu a roupa do rei de roma.";
console.log(slicString.slice(-5, slicString.length - 1)); // usando length pra calcular o fim

let sliccString = "O rato roeu a roupa do rei de roma.";
console.log(sliccString.slice(-5, -1)); // mesma ideia, mas com índices negativos dos dois lados


/* ----------------------------------------------------------
   13. split(separador, limite)
   Quebra a string em um ARRAY de pedaços, usando o
   separador informado. O segundo parâmetro (opcional)
   limita quantos itens o array vai ter.
---------------------------------------------------------- */
let spliStrint = "O rato roeu a roupa do rei de roma.";
console.log(spliStrint.split(' ', 5)); // separa por espaço, mas pega só os 5 primeiros pedaços


/* ----------------------------------------------------------
   14) toLocaleUpperCase()
   Converte TODA a string para MAIÚSCULAS.
   Parecido com toUpperCase(), mas considera as regras de
   maiúsculas/minúsculas do idioma (locale) do ambiente.
   Na maioria dos casos (incluindo português) o resultado é
   igual ao toUpperCase(); a diferença aparece em idiomas com
   regras especiais (ex: turco, onde "i" maiúsculo muda).
---------------------------------------------------------- */
let upperString = "Um texto";
console.log(upperString.toLocaleUpperCase()); // "UM TEXTO"


/* ----------------------------------------------------------
   15) toLowerCase()
   Converte TODA a string para minúsculas.
   Não depende de idioma/locale (diferente do toLocaleLowerCase()).
   Muito usado para comparar textos ignorando maiúscula/minúscula,
   ex: checar se duas palavras são "iguais" sem se importar
   com a caixa das letras.
---------------------------------------------------------- */
let lowerString = "Um Texto";
console.log(lowerString.toLowerCase()); // "um texto"


/* ==========================================================
   RESUMO RÁPIDO
   ==========================================================
   [ ] / charAt()     -> pega o caractere de UM índice específico
   indexOf()          -> descobre o índice de uma substring
   lastIndexOf()      -> descobre o índice, buscando de trás pra frente
   search()           -> descobre o índice usando regex
   match()            -> retorna array de todas as ocorrências (regex)
   slice()            -> extrai um pedaço da string (usa índices)
   split()            -> quebra a string em array
   replace()          -> troca um trecho por outro
   concat() / + / ``  -> junta strings
   length             -> quantidade de caracteres (propriedade)
   toLocaleUpperCase() -> deixa tudo MAIÚSCULO (considera idioma)
   toLowerCase()       -> deixa tudo minúsculo
   ========================================================== */