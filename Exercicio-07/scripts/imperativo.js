/**
* Valores
*
* Serve para instanciar objetos de Arrays numéricas
* com um método para retornar seus extremos e sua média
*
* Constructor - Array<any>
*
* lista numérica recebida ao instanciar a classe
*/
class Valores {
    // utiliza o método converterLista para armazenar os valores da lista
    constructor(listaInserida) {
        this.lista = [];
        this.converterLista(listaInserida);
    }
    /**
     * converterLista()
     *
     * Converte os valores da listaInserida e adiciona à lista
     *
     * @param listaInserida - Array de valores que serão filtrados e passados para a lista
     */
    converterLista(listaInserida) {
        // para cada item na lista inserida...
        for (let indice = 0; indice < listaInserida.length; indice++) {
            // armazena o valor e checa se é numérico, adicionando à lista
            let valor = Number(listaInserida[indice]);
            if (!isNaN(valor)) {
                this.lista.push(valor);
            }
        }
    }
    /**
     * listarValores()
     *
     * Método principal da classe, usado para retornar os valores da lista
     *
     * Declara os valores da lista e calcula o menor e maior valor, assim como
     * a média aritmética entre eles
     *
     * @returns Array numérica contendo o maior, menor e valor médio
     */
    listarValores() {
        // declaração dos valores usados no algoritmo
        let somatoria = 0;
        let maiorValor = this.lista[0];
        let menorValor = this.lista[0];
        // para cada valor contido na lista numérica...
        for (let indice = 0; indice < this.lista.length; indice++) {
            // verifica se o valor atual é maior que o maiorValor
            if (this.lista[indice] > maiorValor) {
                // atualiza o valor se for maior
                maiorValor = this.lista[indice];
            }
            // verifica se o valor atual é menor que o menorValor
            else if (this.lista[indice] < menorValor) {
                // atualiza o valor se for menor
                menorValor = this.lista[indice];
            }
            // adiciona o valor no somatório
            somatoria += this.lista[indice];
        }
        // calcula a média aritmética por meio da somatória
        let valorMedio = somatoria / this.lista.length;
        // retorna os valores dentro de uma lista numérica
        return [maiorValor, menorValor, valorMedio];
    }
}
// Teste do pardigma imperativo 
const listaNumerica = new Valores([1, "Gato", 2, "3", 4, 5]);
console.log(listaNumerica.listarValores());
//# sourceMappingURL=imperativo.js.map