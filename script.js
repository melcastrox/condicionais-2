// Parte 1: Identificar se um número é positivo, negativo ou zero
function verificarNumero(numero) {
  if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }
}

// Testes da Parte 1
verificarNumero(10);   // Saída: O número é positivo.
verificarNumero(-5);   // Saída: O número é negativo.
verificarNumero(0);    // Saída: O número é zero.


// Parte 2: Classificar a idade de uma pessoa
function classificarIdade(idade) {
  if (idade < 12) {
    console.log("Criança");
  } else if (idade >= 12 && idade <= 17) {
    console.log("Adolescente");
  } else if (idade >= 18 && idade <= 64) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}

// Testes da Parte 2
classificarIdade(8);    // Saída: Criança
classificarIdade(15);   // Saída: Adolescente
classificarIdade(30);   // Saída: Adulto
classificarIdade(70);   // Saída: Idoso
