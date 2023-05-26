
// FOR
var carro = [{modelo: "Audio A3", marca : "Audi", ano : 2020},   
{modelo: "Compass", marca : "Jeep", ano : 2022}]  

for (let caracteristicas in carro) {                      // Usado para pegar todas as informações
    carro[caracteristicas];
    console.log(carro[caracteristicas]);
}

// FOR OF

for (let c of carro) {
    console.log(c.ano);       // OF: pega uma propriedade especifica
}


