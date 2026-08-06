const pessoa1 = {
   nome: 'Abner',
   sobrenome: 'Silva',
   idade: '23'


};


console.log(pessoa1.idade); 

//
 



// Função trabalhando junto com objetos;

  
function criaPessoa (nome, sobrenome, idade){

  return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
 

  };

}

const pessoa2 = criaPessoa('Samira', 'Silva', '23');
const pessoa3 = criaPessoa('Abner', 'Furutani', '23');
const pessoa4 = criaPessoa('Jully', 'Silva', '15');

console.log(pessoa4.nome);  // Recebe parâmetros
                            // Retorna um objeto com essas propriedades




//





// Tem dessa forma tambem

function criaPessoa (nome, sobrenome, idade){

  return { nome, sobrenome, idade };
    
}

const pessoa2 = criaPessoa('Samira', 'Silva', '23');
const pessoa3 = criaPessoa('Abner', 'Furutani', '23');
const pessoa4 = criaPessoa('Jully', 'Silva', '15');

console.log(pessoa4.nome);  // Recebe parâmetros
                            // Retorna um objeto com essas propriedades



//


function Criapesso2 (altura , peso ){

  return {altura , peso};


}

const pessoa1 = Criapesso2('1,42', '70Kg');


console.log(pessoa1.peso)




//


const pessoa5 = {

   nome : 'Abner',
   sobrenome : 'Silva',
   idade : 23,

   fala() {                  // Método: fala() - função dentro do objeto
      console.log(`${this.nome} ${this.sobrenome} ${this.idade} está falando oi....`);          // this se refere ao próprio objeto
                                                                            // Permite acessar as propriedades do objeto dentro do método  
                                                                            


   },

   incrementaIdade() {
   this.idade++;


   }



};

pessoa5.fala();
pessoa5.incrementaIdade();







