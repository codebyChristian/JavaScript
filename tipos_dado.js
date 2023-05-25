/* Tipos de dados */

var n = 20;
console.log(typeof(n))

var s;
console.log(typeof(s));

var z = "";
console.log(typeof(z));

var q = null;
console.log(typeof(q));

var y = [];
console.log(typeof(y));

var nome = "Chris";
console.log(typeof(nome));

// Caixa alta
console.log(nome.toLocaleUpperCase());

// Controle de tipos, pois a lingua.. não é tipada

var nome = "Chris";

if (typeof(nome) == "string") {
    console.log("Nome: " + nome.toLocaleUpperCase());
} else {
    console.log("Erro: Digite um nome!")
}


