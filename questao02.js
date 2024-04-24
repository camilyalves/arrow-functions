/*
Exercícios de Arrow Functions:
Questão: Escreva uma arrow function chamada saudacao que recebe um nome 
como parâmetro e retorna uma string de saudação. 
*/

const saudacao = (nome) => {
    return 'Olá, ${nome}! Bem-vindo(a)!'
};

// exemplo de uso:
console.log(saudacao("João")); // saída: Olá, João! Bem-vindo(a)!