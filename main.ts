// Polimorfismo permite que diferentes classes sejam tratadas de forma uniforme, usando métodos comuns. 
// Ele facilita a reutilização e a flexibilidade do código, permitindo que uma função lide com objetos de diferentes tipos. 
// Contudo, pode aumentar a complexidade do sistema e adicionar um pequeno overhead de performance, já que as decisões de qual método chamar são feitas em tempo de execução.

class SerVivo {
  fazerSom(): void {
    console.log("O ser vivo faz um som.");
  }
}

class Cachorro extends SerVivo {
  fazerSom(): void {
    console.log("O cachorro late.");
  }
}

class Gato extends SerVivo {
  fazerSom(): void {
    console.log("O gato mia.");
  }
}

function fazerAnimalFazerSom(animal: SerVivo) {
  animal.fazerSom();
}

const meuCachorro = new Cachorro();
const meuGato = new Gato();

fazerAnimalFazerSom(meuCachorro); // O cachorro late.
fazerAnimalFazerSom(meuGato);     // O gato mia.

