class ListarValores {
    private lista: Array<number>;

    constructor(listaInserida: Array<any>){
        this.lista = listaInserida.filter(valor => !isNaN(valor)).map(Number);
    }

    private menorValor(): number {
        return Math.min(...this.lista);
    }

    private maiorValor(): number {
        return Math.max(...this.lista);
    }

    private somarValores(valor: number, auxiliar: number): number {
        return valor + auxiliar;
    }

    private valorMedio(): number {
        return this.lista.reduce(this.somarValores, 0) / this.lista.length;
    }

    retornarValores(): Array<number>{
        return [this.maiorValor(), this.menorValor(), this.valorMedio()]
    }
}