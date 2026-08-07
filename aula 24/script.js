function meuEscopo () {
     const form = document.querySelector('.form');
     const resultado = document.querySelector('.resultado');

     const pessoas = [];
     
    function  recebeEventoForm (evento) {
        
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

       
        pessoas.push({
           nome:nome.value,
           sobrenome:sobrenome.value,
           peso:peso.value,
           altura:altura.value



        });
         
         resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
         `${peso.value }Kg ${altura.value}</p>` ; 
        
    }
        
    form.addEventListener('submit', recebeEventoForm);
}
 
meuEscopo();
    // form.onsubmit = function (evento) {
    //   evento.preventDefeault();
    //   alert(1);
    //  console.log('Foi enviado.');
// };
//let contador = 1;
//evento.preventDefault();
//console.log(`Form não foi enviado ${contador}`);
//contador++