// Class baseado na orientação a objetos

class Pessoa{

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {                                    // Métodos 
        console.log("Olá " + this.nome);
    }

    get nomeCompleto() {
        console.log("Olá" + " " + this.nome + " " + this.sobrenome + "!");
    }

}

p1 = new Pessoa("Chris", "Santos");   // Cria um usuário

p1.falar();

p1.nomeCompleto;                            // Buscando do métoso get para encapsulamento






