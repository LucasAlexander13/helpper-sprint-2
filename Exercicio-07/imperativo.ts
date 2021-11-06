class ListarValores {
    lista: number[];

    constructor(lista_inserida: any[]){
        this.converterLista(lista_inserida)
    }

    private converterLista(lista_inserida) {
        // para cada valor na lista inserida, verifica se é numérico e adiciona à lista
        for (let indice: number = 0; indice < lista_inserida.length; indice++){
            let item = Number(lista_inserida[indice]);
            if (!isNaN(item)){
                this.lista.push(item);
            }
        }
    }

    retornarValores() {
        let somatoria: number = 0;
        let maior_valor: number = this.lista[0];
        let menor_valor: number = this.lista[0];
        // para cada valor na lista, verificar o maior, o menor e realizar a soma
        for (let indice: number = 0; indice < this.lista.length; indice++){

            if (this.lista[indice] > maior_valor) {
                maior_valor = this.lista[indice];
            }
            else if (this.lista[indice] < menor_valor) {
                menor_valor = this.lista[indice];
            }
            somatoria += this.lista[indice];
        }
        let valor_medio: number = somatoria / this.lista.length;
        return [maior_valor, menor_valor, valor_medio];
    }
}