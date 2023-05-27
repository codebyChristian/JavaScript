
var valores = [8,1,7,2,9,10,11,23];

console.log(valores); 
// Reverse
console.log("Arraays invertido: " + valores.reverse());


for (var pos = 0; pos < valores.length; pos++) {
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

var carros = [];            // Pode declarar cada posição manualmente
carros[0] = "Volvo";
carros[1] = "Jeep";


// Outra forma de declarar uma array
var motos = new Array("BMW", "Yamaha", "Honda");


// Calcula média de números de uma array

var number = [9,7,8,5];

var soma = 0;

for (var i = 0; i < number.length; i++) {   
    soma += number[1];                           
    
}         // Faz o calculo fora do loop

var media = soma/number.length;        // Neste caso ele divide pelo tamanho do array que é 4
console.log("A média é: " + media);


// Localizar a maior valor dentro de uma array



// Join      Junta elementos com persolanização

var high = [1,2,3,4];

console.log(high.join("|"));

// Shift           Retira a primeiro elemento da array
var retirado = high.shift();

console.log(retirado);

console.log(high);  // Sem o primeiro número

// Posição de elementos
console.log("Posição do número 3: " + high.indexOf(3));  // Posições começam do 0

// Acresentar itens no array

high.push(7);
console.log(high);         // O número 7 foi adicionado na última posição
  

high.pop();                  //  Removes the last element from an array and returns it
console.log(high);         


// Criar um array com números reais e depois separar somentes os números inteiros


// SPLICE: ele corta o array, splice(2) -> isso signica que apartir do 2 será apagado

var arr2 = [1,2,3,4,5,6,7];
arr2.splice(1,2);         // Vai tirar a posição 1, e depois da virgula determina a quant.. que vai tirar

console.log(arr2);



var nomes = ["Maria", "João", "Lucas", "Pedro"];

var novos = nomes.splice(1,2,"Luis", "Ronaldo"); 
console.log(nomes);

var pais = ["Brazil", "Argentina", "Colombia"];

pais.unshift("Uruguay");     // Cria um elemento no início
console.log(pais);

// SLICE

var person = ["Tiru", "Vale Gás", "Hello", "World"];
var person2 = person.slice(1,3);

console.log(person);

console.log(person2);

// Concatenação

var play = ["Too", "Me", "You"];

var play2 = ["Eu", "Você", "Nós"];

var time = play.concat(play2);

console.log(time);

// Divide todos os meses do ano em trimestre

