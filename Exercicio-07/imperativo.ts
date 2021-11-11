class ListarValores {
    private lista: Array<number>;

    constructor(listaInserida: Array<any>){
        this.converterLista(listaInserida)
    }

    private converterLista(listaInserida: Array<any>) {
        // para cada valor na lista inserida, verifica se é numérico e adiciona à lista
        for (let indice: number = 0; indice < listaInserida.length; indice++){
            let item = Number(listaInserida[indice]);
            if (!isNaN(item)){
                this.lista.push(item);
            }
        }
    }

    retornarValores(): Array<number> {
        let somatoria: number = 0;
        let maiorValor: number = this.lista[0];
        let menorValor: number = this.lista[0];
        // para cada valor na lista, verificar o maior, o menor e realizar a soma
        for (let indice: number = 0; indice < this.lista.length; indice++){

            if (this.lista[indice] > maiorValor) {
                maiorValor = this.lista[indice];
            }
            else if (this.lista[indice] < menorValor) {
                menorValor = this.lista[indice];
            }
            somatoria += this.lista[indice];
        }
        let valorMedio: number = somatoria / this.lista.length;
        return [maiorValor, menorValor, valorMedio];
    }
}