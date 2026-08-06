// Primeiro teste de como funciona as Funçoes;


//function saudaçoes (nome) {

//console.log(`Bom dia ${nome}`);

//}

//saudaçoes ('Abner');
//saudaçoes ('Samira');


//


//* function saudacao (nome) {

//return (`Bom dia ${nome}`);  //Aqui ele retorna um valor

//}

//const variavel = saudacao ('Abner');

//console.log(variavel); 


function soma (x, y) {       //Aqui é uma funçao que faz uma soma;
    const resultado = x + y;       // Aqui esta praticamente protegido, esta dentro do escopo da função, não é possivel alterar nada que esta dentro da função;
    
    return resultado;

}


console.log(soma(2, 2));