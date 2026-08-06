# Vetores e Matrizes em JavaScript
## Guia Completo para Iniciantes

---

## Índice
1. [O que são Vetores (Arrays)?](#o-que-são-vetores-arrays)
2. [Criando Arrays em JavaScript](#criando-arrays-em-javascript)
3. [Acessando Elementos](#acessando-elementos)
4. [Métodos Importantes de Arrays](#métodos-importantes-de-arrays)
5. [O que são Matrizes?](#o-que-são-matrizes)
6. [Matrizes em JavaScript](#matrizes-em-javascript)
7. [Operações com Matrizes](#operações-com-matrizes)
8. [Exemplos Práticos](#exemplos-práticos)
9. [Exercícios](#exercícios)

---

## O que são Vetores (Arrays)?

### Definição Básica
Um **vetor** (ou **array**) é uma estrutura de dados que armazena múltiplos valores em uma única variável.

### Analogia do Dia a Dia
Imagine uma caixa de sapatos:
- **Variável comum:** Uma caixa que guarda UM sapato
- **Array:** Uma caixa que guarda VÁRIOS sapatos organizados

### Por que usar Arrays?
- **Organização:** Guarda dados relacionados juntos
- **Eficiência:** Acessa múltiplos valores com uma variável
- **Flexibilidade:** Pode adicionar/remover elementos facilmente

---

## Criando Arrays em JavaScript

### Forma 1: Colchetes `[]` (Mais comum)
```javascript
// Array vazio
let frutas = [];

// Array com elementos
let frutas = ["maçã", "banana", "laranja"];

// Array com números
let numeros = [1, 2, 3, 4, 5];

// Array misto (não recomendado, mas possível)
let misto = ["texto", 123, true, null];
```

### Forma 2: Construtor `new Array()`
```javascript
let frutas = new Array("maçã", "banana", "laranja");
let numeros = new Array(5); // Cria array com 5 posições vazias
```

### Boas Práticas
- **Prefira colchetes `[]`** - Mais simples e comum
- **Use nomes descritivos** - `frutas` em vez de `arr1`
- **Mantenha tipos consistentes** - Evite arrays mistos

---

## Acessando Elementos

### Índices começam em ZERO
```javascript
let frutas = ["maçã", "banana", "laranja"];
//           [0]      [1]       [2]

console.log(frutas[0]); // "maçã"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "laranja"
```

### Modificando Elementos
```javascript
let frutas = ["maçã", "banana", "laranja"];

frutas[0] = "uva"; // Substitui "maçã" por "uva"
console.log(frutas); // ["uva", "banana", "laranja"]
```

### Tamanho do Array
```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length); // 3
```

### Acessando o último elemento
```javascript
let frutas = ["maçã", "banana", "laranja"];
let ultimo = frutas[frutas.length - 1]; // "laranja"
```

---

## Métodos Importantes de Arrays

### Adicionar Elementos

#### `push()` - Adiciona ao FINAL
```javascript
let frutas = ["maçã", "banana"];
frutas.push("laranja");
console.log(frutas); // ["maçã", "banana", "laranja"]
```

#### `unshift()` - Adiciona ao INÍCIO
```javascript
let frutas = ["banana", "laranja"];
frutas.unshift("maçã");
console.log(frutas); // ["maçã", "banana", "laranja"]
```

### Remover Elementos

#### `pop()` - Remove do FINAL
```javascript
let frutas = ["maçã", "banana", "laranja"];
let removido = frutas.pop();
console.log(removido); // "laranja"
console.log(frutas); // ["maçã", "banana"]
```

#### `shift()` - Remove do INÍCIO
```javascript
let frutas = ["maçã", "banana", "laranja"];
let removido = frutas.shift();
console.log(removido); // "maçã"
console.log(frutas); // ["banana", "laranja"]
```

### Percorrer Arrays

#### `for` tradicional
```javascript
let frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída:
// maçã
// banana
// laranja
```

#### `for...of` (Mais moderno)
```javascript
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
    console.log(fruta);
}
// Saída:
// maçã
// banana
// laranja
```

#### `forEach()` (Funcional)
```javascript
let frutas = ["maçã", "banana", "laranja"];

frutas.forEach(function(fruta) {
    console.log(fruta);
});
// Saída:
// maçã
// banana
// laranja
```

### Métodos de Transformação

#### `map()` - Transforma cada elemento
```javascript
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(function(num) {
    return num * 2;
});
console.log(dobrados); // [2, 4, 6, 8, 10]
```

#### `filter()` - Filtra elementos
```javascript
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(function(num) {
    return num % 2 === 0;
});
console.log(pares); // [2, 4, 6]
```

#### `reduce()` - Reduz a um único valor
```javascript
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0);
console.log(soma); // 15
```

### Métodos de Busca

#### `find()` - Encontra primeiro elemento
```javascript
let numeros = [10, 20, 30, 40, 50];
let encontrado = numeros.find(function(num) {
    return num > 25;
});
console.log(encontrado); // 30
```

#### `includes()` - Verifica se existe
```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva")); // false
```

#### `indexOf()` - Posição do elemento
```javascript
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("uva")); // -1 (não existe)
```

### Ordenação

#### `sort()` - Ordena (cuidado com números!)
```javascript
let frutas = ["laranja", "maçã", "banana"];
frutas.sort();
console.log(frutas); // ["banana", "laranja", "maçã"]

// Para números, precisa de função de comparação
let numeros = [3, 1, 4, 1, 5, 9];
numeros.sort(function(a, b) {
    return a - b;
});
console.log(numeros); // [1, 1, 3, 4, 5, 9]
```

#### `reverse()` - Inverte ordem
```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]
```

---

## O que são Matrizes?

### Definição
Uma **matriz** é um array bidimensional - um array de arrays.

### Analogia Visual
Pense em uma planilha Excel:
- **Array (1D):** Uma linha ou uma coluna
- **Matriz (2D):** Várias linhas E várias colunas

### Estrutura Visual
```
Matriz 3x3 (3 linhas, 3 colunas):
[
  [1, 2, 3],    // Linha 0
  [4, 5, 6],    // Linha 1
  [7, 8, 9]     // Linha 2
]
```

---

## Matrizes em JavaScript

### Criando Matrizes
```javascript
// Matriz 3x3
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Matriz de nomes
let nomes = [
    ["Ana", "Bruno", "Carlos"],
    ["Diana", "Eduardo", "Fernanda"],
    ["Gabriel", "Helena", "Igor"]
];
```

### Acessando Elementos
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// matriz[linha][coluna]
console.log(matriz[0][0]); // 1 (primeira linha, primeira coluna)
console.log(matriz[1][2]); // 6 (segunda linha, terceira coluna)
console.log(matriz[2][1]); // 8 (terceira linha, segunda coluna)
```

### Modificando Elementos
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matriz[1][1] = 100; // Muda o 5 para 100
console.log(matriz);
// [
//   [1, 2, 3],
//   [4, 100, 6],
//   [7, 8, 9]
// ]
```

### Dimensões da Matriz
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz.length); // 3 (número de linhas)
console.log(matriz[0].length); // 3 (número de colunas)
```

---

## Operações com Matrizes

### Percorrer Matriz (Linha por Linha)
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento [${i}][${j}]: ${matriz[i][j]}`);
    }
}
// Saída:
// Elemento [0][0]: 1
// Elemento [0][1]: 2
// Elemento [0][2]: 3
// Elemento [1][0]: 4
// Elemento [1][1]: 5
// Elemento [1][2]: 6
// Elemento [2][0]: 7
// Elemento [2][1]: 8
// Elemento [2][2]: 9
```

### Somar Todos os Elementos
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let soma = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
    }
}
console.log(soma); // 45
```

### Encontrar Maior Elemento
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let maior = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
        }
    }
}
console.log(maior); // 9
```

### Diagonal Principal
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Diagonal principal: elementos onde linha == coluna
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][i]);
}
// Saída: 1, 5, 9
```

### Transpor Matriz (Inverter linhas e colunas)
```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

let transposta = [];
for (let i = 0; i < matriz[0].length; i++) {
    transposta[i] = [];
    for (let j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i];
    }
}
console.log(transposta);
// [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ]
```

---

## Exemplos Práticos

### Exemplo 1: Lista de Compras
```javascript
let listaCompras = ["arroz", "feijão", "carne", "leite"];

listaCompras.push("ovos"); // Adiciona ovos
listaCompras.shift(); // Remove arroz

console.log("Itens para comprar:");
listaCompras.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`);
});
```

### Exemplo 2: Notas de Alunos
```javascript
let alunos = [
    ["Ana", 8.5, 9.0, 7.5],
    ["Bruno", 7.0, 8.5, 9.0],
    ["Carlos", 9.5, 8.0, 8.5]
];

// Calcular média de cada aluno
for (let i = 0; i < alunos.length; i++) {
    let nome = alunos[i][0];
    let notas = alunos[i].slice(1); // Pega só as notas
    let media = notas.reduce(function(a, b) {
        return a + b;
    }) / notas.length;
    console.log(`${nome}: Média ${media.toFixed(1)}`);
}
// Saída:
// Ana: Média 8.3
// Bruno: Média 8.2
// Carlos: Média 8.7
```

### Exemplo 3: Tabuleiro de Jogo
```javascript
// Tabuleiro 3x3 (Jogo da Velha)
let tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Fazer jogada
tabuleiro[0][0] = "X";
tabuleiro[1][1] = "O";
tabuleiro[2][2] = "X";

console.log(tabuleiro);
// [
//   ["X", "", ""],
//   ["", "O", ""],
//   ["", "", "X"]
// ]
```

---

## Exercícios

### Exercício 1: Array Básico
Crie um array com 5 cores favoritas e:
1. Adicione uma cor no final
2. Remova a primeira cor
3. Imprima todas as cores

### Exercício 2: Filtragem
Dado o array `[10, 15, 20, 25, 30]`, crie um novo array apenas com números maiores que 18.

### Exercício 3: Soma de Matriz
Crie uma matriz 2x3 e calcule a soma de todos os elementos.

### Exercício 4: Matriz de Nomes
Crie uma matriz 3x3 com nomes de pessoas e imprima apenas os nomes da diagonal principal.

### Exercício 5: Busca em Array
Crie um array de números e verifique se o número 7 existe no array usando `includes()`.

---

## Dicas Importantes

### Para Arrays (1D):
- Índices começam em 0
- `length` retorna o tamanho
- `push/pop` trabalham no final
- `shift/unshift` trabalham no início
- Use `forEach` para percorrer elementos

### Para Matrizes (2D):
- São arrays de arrays
- Acesso: `matriz[linha][coluna]`
- Use dois loops `for` para percorrer
- Verifique se a matriz é quadrada antes de usar diagonal

### Erros Comuns:
- **Acessar índice inexistente:** `arr[10]` em array de 5 elementos
- **Esquecer que índice começa em 0:** `arr[1]` é o SEGUNDO elemento
- **Matrizes irregulares:** Linhas com tamanhos diferentes causam erros

---

## Resumo Visual

### Array (1D):
```
[ A, B, C, D, E ]
  0  1  2  3  4  ← Índices
```

### Matriz (2D):
```
[
  [ A, B, C ],  ← Linha 0
  [ D, E, F ],  ← Linha 1
  [ G, H, I ]   ← Linha 2
]
   0  1  2    ← Colunas
```

---

## Próximos Passos

Depois de dominar vetores e matrizes, você pode estudar:
- Arrays multidimensionais (3D, 4D...)
- Estruturas de dados avançadas (pilhas, filas, árvores)
- Algoritmos de ordenação e busca
- Programação funcional com arrays

---

**Bons estudos! 🚀**
