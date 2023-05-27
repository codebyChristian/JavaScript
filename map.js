var numbers = [1,2,3,4,5,6,7,8,9,10];

var num = numbers.map(function(valor){
    return valor * 2;
});

console.log(num);

var funcionario = [
    {nome: "Luis", idade: 62},
    {nome: "Davi", idade: 40},
    {nome: "Pablo", idade: 22},
    {nome: "Maior", idade: 54},
]

nomes = funcionario.map(pessoa => pessoa.nome);
console.log(nomes);



