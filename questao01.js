/*
Exercícios de Arrow Functions:
Questão: Crie um algoritmo usando o método map() para converter um 
array de strings para um array de números? 
*/

const arrayDeStrings = ["10", "20", "30", "40", "50"];

const arrayDeNumeros = arrayDeStrings.map(numero => parseInt(numero));

console.log(arrayDeNumeros); // saída: [10, 20, 30, 40, 50]
