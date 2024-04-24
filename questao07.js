/*
Exercícios de Arrow Functions:
Questão:   Escreva uma arrow function chamada contaLetras que recebe uma 
string como parâmetro e retorna um objeto contendo a contagem de cada letra 
presente na string.
*/

const contaLetras = (string) => {
    const contador = {};

    for (let letra of string) {
        if (letra !== " ") {
            if (contador[letra]) {
                contador[letra]++;
            } else {
                contador[letra] = 1;
            }
        }
    }

    return contador;
};


// exemplo de uso:
console.log(contaLetras("hello world"));
// saída: {h: 1, e: 1, 1: 3, o: 2, w: 1, r: 1, d: 1 }