class ListarValores {
    constructor(lista_inserida) {
        this.lista = lista_inserida.filter(valor => !isNaN(valor)).map(Number);
    }
    menorValor() {
        return Math.min(...this.lista);
    }
    maiorValor() {
        return Math.max(...this.lista);
    }
    somarValores(valor, auxiliar) {
        return valor + auxiliar;
    }
    valorMedio() {
        return this.lista.reduce(this.somarValores, 0) / this.lista.length;
    }
    retornarValores() {
        return [this.maiorValor, this.menorValor, this.valorMedio];
    }
}
//# sourceMappingURL=funcional.js.map