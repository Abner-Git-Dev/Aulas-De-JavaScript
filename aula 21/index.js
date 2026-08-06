function soma (x, y) {       //Aqui é uma funçao que faz uma soma;
    
    
    const resultado = x + y;       // Aqui esta praticamente protegido, esta dentro do escopo da função, não é possivel alterar nada que esta dentro da função;
    
    return resultado; // Tudo que esta abaixo do 'return' não sera executado;

}


const resultado = soma();

console.log(resultado); 



//

function soma (x, y) {  
    
    
    const resultado = x + y;
    
    return resultado; 
}


const resultado = soma();

console.log(resultado); // O resultado vai ser NaN; mesmo que vc coloque (5) um numero apenas ira dar NaN, pq falta um outro numero para somar; Para funcionar corretamente, precisa passar ambos os parâmetros.

//

function soma (x, y) {  
    
    
    const resultado = x + y;
    
    return resultado; 
}


const resultado = soma('Abner', 'Silva');
console.log(resultado) // Aqui esta fazendo a concatenização, Quando você passa strings, o operador + faz concatenação.

//

function soma (x = 1, y = 1) {  
    
    
    const resultado = x + y;
    
    return resultado; 
}


const resultado = soma(4); // Aqui o X vai valer '4', e como nao enviei o 'Y' entao ele ainda continua valendo '1';
console.log(resultado)


//

const raiz = function (n) {
   return (n ** 0.5);


};          // Dessa forma assim tem que usar o ponto e virgula (;), e essa funçao é usada para fazer uma Raiz Quadrada;
             //Quando você atribui uma função anônima a uma variável com const, é uma boa prática usar ponto e vírgula no final.

//

const raiz = (n) => {   // arrow function (função flecha), que é a forma moderna de escrever funções em JavaScript.

   return n ** 0.5;


};
 
 console.log(raiz(5));

 //

//Essa é a forma mais concisa de arrow function.
 const raiz = n => n ** 0.5; //tambem tem essa forma de função do arrow function; 

 console.log(raiz(5));