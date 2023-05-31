
class dispositivoEletronico{

    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log("Ligado...");
            return;
        }
        this.ligado = true;

    }

}


class smartphone extends dispositivoEletronico {           // Recebe a herança da classe principal

    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }


}

var s1 = new smartphone("Samsung", "Branco", "S6");

console.log(s1);
s1.ligar();
s1.ligar();
