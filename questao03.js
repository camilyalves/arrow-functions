/*
Exercícios de Arrow Functions:
Questão:  Escreva uma arrow function chamada somaArray que recebe um array 
de números como parâmetro e retorna a soma de todos os elementos desse array. 
*/

const somaArray = (array) => {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
};

// exemplo de uso:
const numeros =[1, 2, 3, 4, 5];
console.log(somaArray(numeros)); // saída: 15