// Polimorfismo permite que diferentes classes sejam tratadas de forma uniforme, usando métodos comuns. 
// Ele facilita a reutilização e a flexibilidade do código, permitindo que uma função lide com objetos de diferentes tipos. 
// Contudo, pode aumentar a complexidade do sistema e adicionar um pequeno overhead de performance, já que as decisões de qual método chamar são feitas em tempo de execução.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SerVivo = /** @class */ (function () {
    function SerVivo() {
    }
    SerVivo.prototype.fazerSom = function () {
        console.log("O ser vivo faz um som.");
    };
    return SerVivo;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.fazerSom = function () {
        console.log("O cachorro late.");
    };
    return Cachorro;
}(SerVivo));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.fazerSom = function () {
        console.log("O gato mia.");
    };
    return Gato;
}(SerVivo));
function fazerAnimalFazerSom(animal) {
    animal.fazerSom();
}
var meuCachorro = new Cachorro();
var meuGato = new Gato();
fazerAnimalFazerSom(meuCachorro); // O cachorro late.
fazerAnimalFazerSom(meuGato); // O gato mia.
