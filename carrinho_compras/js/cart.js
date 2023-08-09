// Definir variáveis do valor total incluindo o 1 item e 2 item

var valorTotal = [0,0];
var valorProduto = [50.00, 30.00];
var qtd = [0,0];

function adicionarItem(item) {

    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    qtd[item] += 1;                                                           // Fazer soma no qtd
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];        // Alterar valor total
    quantidade.innerHTML = qtd[item];                                        // Alterar texto de quantidade
    total.innerHTML = valorTotal[item].toFixed(2);                           // Total preço
    valorCompra();

}


function removerItem(item) {

    if(qtd[item] > 0) {
        qtd[item] -=1;
        var quantidade = document.getElementById("quantidade" + item);
        var total = document.getElementById("total" + item);
        quantidade.innerHTML = qtd[item];      
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];                                      
        total.innerHTML = valorTotal[item].toFixed(2);  
        valorCompra();
    }
    

}


function valorCompra() {
    
    var valorTotalCompra = document.getElementById("valorTotalCompra")
    var valor = 0;

    for(var i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
        
    }
    
    valorTotalCompra.innerHTML = valor.toFixed(2);
}





