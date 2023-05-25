
var n = 3;
//n = n * 10;    // O operador de baixo simplifica esse.
n *= 10;
console.log(n);

var x = 10;
x++    // Soma +1
console.log(x);

b = 20;
c = 60;

console.log("Boolean");
console.log(n > x);   // Boolean

console.log("Porta and");
console.log(n <= x && b != c);   // Porta and

console.log("Porta or");
console.log(n <= x || b != c);   // Porta or

console.log("Porta not");
console.log(!(n <= x || b != c));   // Porta not !()

// Verificar se a é maior que b e b é divisivel por 2

console.log(a > b && b % 2 == 0);


// Verificar se b é maior igual a ou b dividido por 2 é 2

console.log(b >= a || b / 2 == 2)

// Verificar se a é maior que b e b maior igual a 5

console.log(a > b && b >= 5);

// Verificar se b é par ou impar usando ternario

resultado = b % 2 == 0 ? "Par" : "Impar";
