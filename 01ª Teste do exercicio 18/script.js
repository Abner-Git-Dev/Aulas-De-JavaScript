  const numero = Number(prompt("Digite um numero:"));
  const numeroTitulo = document.getElementById('numero-titulo');
  const texto = document.getElementById('texto');
 
   numeroTitulo.innerHTML= numero
  texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
  texto.innerHTML += `<p>$Esse numero é inteiro: ${Number.isInteger(numero)}.</p>`;
  texto.innerHTML += `<p>Ele é um NaN: ${Number.isNaN(numero)}.</p>`;