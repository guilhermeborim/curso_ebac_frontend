class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar() {
        throw new Error("Método 'ligar' deve ser implementado nas subclasses.");
    }

    desligar() {
        throw new Error("Método 'desligar' deve ser implementado nas subclasses.");
    }

}

// Subclasse Carro
class Carro extends Veiculo {
    constructor(marca, modelo, numPortas) {
        super(marca, modelo);
        this.numPortas = numPortas;
    }

    ligar() {
        return `O carro ${this.modelo} está ligado.`;
    }

    desligar() {
        return `O carro ${this.modelo} está desligado.`;
    }
}

// Subclasse Moto
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    ligar() {
        return `A moto ${this.modelo} está ligada.`;
    }

    desligar() {
        return `A moto ${this.modelo} está desligada.`;
    }
}

// Criando instâncias
const carro = new Carro("Toyota", "Corolla", 4);
const moto = new Moto("Honda", "CBR500R", 500);
const outroCarro = new Carro("Ford", "Mustang", 2);

console.log(carro)