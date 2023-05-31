// Criando funcões
function multiplicar(a,b) {
    return a * b;
}

var x = multiplicar(12,34);
console.log(x);


function funcao(a, b=2, c=4) {        // Pode determinar valores nos parametros
    console.log(a + b + c);
}
funcao(2);

// Se não sabe quantos argumentos serão passados, crie o args ele cria um array

function test(...args) {
    console.log(args);
}

test(3,4,5,6,7);
