/*
Exercícios de Arrow Functions:
Questão:   Escreva uma arrow function chamada maiorNumero que recebe dois 
números como parâmetros e retorna o maior deles
*/

const maiorNumero = (numero1, numero2) => {
    return Math.max(numero1, numero2);
};

// exemplo de uso:
console.log(maiorNumero(10, 5)); // saída: 10
console.log(maiorNumero(3, 8)); // saída: 8