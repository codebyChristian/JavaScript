
var pais = "Brazil";

if (pais != "Brazil") {
    console.log("Voce é estrangeiro!");
}else {
    console.log("Você é brasileiro!!");
}

var idade = 77;

if (idade < 16) {
    console.log("Você não vota!");
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional.");
}else {
    console.log("Você está apto para votar.")
}
