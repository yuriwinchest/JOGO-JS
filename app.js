alert('Boas vindas ao jogo do número secreto');
let valorMaximo = parseInt(prompt('Informe o valor máximo do número secreto'));
let numeroSecreto = Math.floor(Math.random() * (valorMaximo + 1));
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (true) {
  chute = parseInt(prompt(`Escolha um número entre 0 e ${valorMaximo}`));
  tentativas++;

  if (numeroSecreto === chute) {
    alert(`Isso aí! Você descobriu o ${numeroSecreto} em ${tentativas} tentativa(s). Parabéns!`);
    break;
  } else if (chute > numeroSecreto) {
    if (chute - numeroSecreto <= 10.000) {
      alert(`O número secreto é menor, mas você está chegando perto!`);
    } else {
      alert(`O número secreto é menor que ${chute}`);
    }
  } else {
    if (numeroSecreto - chute <= 10.000) {
      alert(`O número secreto é maior, mas você está chegando perto!`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
  }
}