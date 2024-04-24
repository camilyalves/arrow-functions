/*
Exercícios de Arrow Functions:
Questão:  Escreva uma arrow function chamada ehPar que recebe um número 
como parâmetro e retorna true se o número for par e false se for ímpar.
*/

const ehPar = (numero) => {
    return numero % 2 === 0;
};

// exemplos de uso:
console.log(ehPar(4)); // saída: true
console.log(ehPar(7)); // saída: false