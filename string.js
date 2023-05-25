
var nome = "Christian dos Santos";
var x = nome.length;                    // length: conta quantos caracteres há e os espaços valem
console.log(x);

resultado = x > 19 ? "Obrigado" : "Nome completo, por favor."     // ternário

console.log(resultado)

var res = nome.toLocaleUpperCase();    // Caixa alta
console.log(res);

var jogo = "Barcelona vs Real melhor time";
var posicao = jogo.indexOf("Real");          // Descobrir a posição de uma palavra conhecida
console.log(posicao);

var cortado = jogo.slice(0, 10);               // Selecionar as letras de 0 10
console.log(cortado);

var cortado = jogo.slice(13,);                       // Selecionar de 13 até a ultima letra
console.log(cortado);

var val = jogo.includes("Real");           // Procurar se há determinada palavra na string: valor boolean
console.log(val);

var str1 = "Hello ";
var str2 = "World";
var str3 = str1.concat(str2);             // Contatenar váriaveis
console.log(str3);

var frase = "      Olá estamos aprendendo javascript!"
console.log(frase.trim());                   // Retira os espaços do início e do fim da frase

var num =  "1,2,3,4,5,6,7,8";
var arr = num.split(",");            // Transforma uma string em array
console.log(arr);
console.log(arr[2]);

