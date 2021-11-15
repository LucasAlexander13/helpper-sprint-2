/**
* Valores
*
* Serve para instanciar objetos de Arrays numéricas
* com um método para retornar seus extremos e sua média
* 
* Construtor - lista
* lista numérica recebida ao instanciar a classe
*/
class Valores {

    private lista: Array<number>;
    // armazena na lista os valores numéricos da listaInserida
    constructor(listaInserida: Array<any>) {
        this.lista = listaInserida.filter(valor => !isNaN(valor)).map(Number);
    }

    /**
     * menorValor()
     * 
     * Método privado interno usado no método listarValores 
     * 
     * @returns o menor valor da lista
     */
    private menorValor(): number {
        return Math.min(...this.lista);
    }

    /**
     * maiorValor()
     * 
     * Método privado interno usado no método listarValores 
     * 
     * @returns o maior valor da lista
     */
    private maiorValor(): number {
        return Math.max(...this.lista);
    }

    /**
     * somarValores()
     * 
     * Método auxiliar usado em função reduce para calcular o somatório
     * 
     * @param valor - primeiro número a ser somado
     * @param auxiliar - segundo número a ser somado
     * 
     * @returns a soma entre os valores
     */
    private somarValores(valor: number, auxiliar: number): number {
        return valor + auxiliar;
    }

    /**
     * valorMedio()
     * 
     * Método privado interno usado no método listarValores 
     * 
     * @returns a média aritmética entre os valores da lista
     */
    private valorMedio(): number {
        return this.lista.reduce(this.somarValores, 0) / this.lista.length;
    }

    /**
     * listarValores()
     * 
     * Método principal da classe, usado para retornar os valores da lista
     * 
     * @returns Array numérica contendo o maior, menor e valor médio
     */
    listarValores(): Array<number>{
        return [this.maiorValor(), this.menorValor(), this.valorMedio()];
    }
}

// Teste do pardigma funcional 
const listaNumerica: Valores = new Valores([1, "Gato", 2, "3", 4, 5]);
console.log(listaNumerica.listarValores());
