const soma = Number(prompt('Insira Um numero:'));
 const outronum = Number(prompt('Insira outro numero'));

 function somar (x, y) {
    
    return (x + y);
     
    
    
        }


const resultado = somar(soma , outronum);
document.getElementById('resultado').innerHTML = `<strong>A soma é: ${resultado}</strong>`;
