// Criando objetos de diferentes formas
var pessoa = {
    nome: "Luiz",
    sobrenome: "Silva"
};
console.log(pessoa['sobrenome']);

var pessoa2 = new Object();
pessoa2.nome = "Angela";
pessoa2.sobrenome = "Santos"

pessoa2.falarNome = function() {              // Função para objetos
    console.log("Nome é: " + this.nome);
}

console.log(pessoa2.falarNome());  


// Função

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

// Outra forma de criar objeto
var p1 = criaPessoa("Lei", "Sola");
var p2 = criaPessoa("Lua", "Cheia");

console.log(p1);
