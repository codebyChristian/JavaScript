
var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado);

// Função

var numerosFiltrados = numeros.filter(
    function(valor) {
        return valor > 5;        
    }
);

console.log(numerosFiltrados);

function buscarValores(valor) {
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);




var r1 = numeros.filter((valor) => {
    return valor > 5;
} );

console.log(r1);

// shorthand

var r2 = numeros.filter(valor => valor > 5);
console.log(r2);

var funcionario = [
    {nome: "Luis", idade: 62},
    {nome: "Davi", idade: 40},
    {nome: "Pablo", idade: 22},
    {nome: "Maior", idade: 54},
];

var pessoasLista = funcionario.filter(
    function(valor) {
        return valor.nome.length < 5                                           //console.log(valor.nome);
    }
);
console.log(pessoasLista);


