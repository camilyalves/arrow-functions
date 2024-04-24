/*
Exercícios de Arrow Functions:
Questão:   Escreva uma arrow function chamada ehPalindromo que recebe uma 
string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela 
pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita para 
a esquerda) e false caso contrário. 
*/

const ehPalindromo = (string) => {
    // Removendo espaços e convertendo para minúsculas para tornar a comparação mais fácil
    const textoFormatado = string.toLowerCase().replace(/ /g, '');
  
    // Comparando a string original com sua versão invertida
    return textoFormatado === textoFormatado.split('').reverse().join('');
  };
  
  // Exemplos de uso:
  console.log(ehPalindromo("arara")); // Saída: true
  console.log(ehPalindromo("reviver")); // Saída: true
  console.log(ehPalindromo("palavra")); // Saída: false
  