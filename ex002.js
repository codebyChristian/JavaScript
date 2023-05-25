/* Um algoritmo que leia um número inteiro e que imprima o seu sucessor e seu antecessor  */

var number = 100;

number ++;
console.log("O número sucessor de 100 é: " + number);
// Antecessor
number = 100;
number --;
console.log("O número antecessor de 100 é: " + number);


// Outra forma

var numero = 10;
var sucessor;
var antecessor;

antecessor = numero - 1;
sucessor = numero + 1;

console.log("O sucessor é " + sucessor);
console.log("O antecessor é " + antecessor);

