class ListarValores {
    lista: number[];

    constructor(lista_inserida: any[]){
        this.lista = lista_inserida.filter(valor => !isNaN(valor)).map(Number);
    }

    private menorValor() {
        return Math.min(...this.lista);
    }

    private maiorValor() {
        return Math.max(...this.lista);
    }

    private somarValores(valor: number, auxiliar: number){
        return valor + auxiliar;
    }

    private valorMedio() {
        return this.lista.reduce(this.somarValores, 0) / this.lista.length;
    }

    retornarValores(){
        return [this.maiorValor, this.menorValor, this.valorMedio]
    }
}