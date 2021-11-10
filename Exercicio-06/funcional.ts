// declaração da interface para a Array de Objetos
interface Pessoa {
    id: number,
    name: string,
    bio: string
}
// Array de Pessoa que será usada como parâmetro
let lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoananova_lista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

class Cientistas {
    /**
     * @class Cientistas
     * Representa uma Array de Pessoas, contendo métodos que permitem a manipulação
     * das informações contidas nessa Array de Objetos.
     * 
     * @property listaCientistas
     * Array de objetos do tipo Pessoa, recebida ao instanciar a classe.
     */

    private listaCientistas: Array<Pessoa>;
    // passa para a listaCientistas o valor da listaInserida ao instanciar a classe
    constructor(listaInserida: Array<Pessoa>) {
        this.listaCientistas = listaInserida;
    }
    
    /**
     * @method retornarInfo
     * Encontra a informação da lista a partir do id passado como parâmetro
     * 
     * @param id - número a ser consultado na lista, usado como índice
     * @param tipo - string do tipo de informação a ser retornada, podendo ser "bio" ou "name"
     * 
     * @returns retorna a informação do tipo especificado se encontrar o id
     */
    retornarInfo(id: number, tipo: string): string {
        return this.listaCientistas.find((pessoa: Pessoa) => pessoa.id === id)?.[tipo];
    }
 
    /**
     * @method apagarItem
     * Filtra a lista removendo os itens do id passado
     * 
     * @param id - número do item que será removido da lista a partir do filter 
     * 
     * @returns retorna a listaCientistas sem o objeto removido
     */
    apagarItem(id: number): Array<Pessoa> {
        return this.listaCientistas.filter((pessoa: Pessoa) => pessoa.id !== id);
    }

    /**
     * @method alterarInfo
     * Altera informações a partir do id e do tipo de informação passados
     * 
     * @param id - número a ser consultado na lista, usado como índice
     * @param tipo - string do tipo de informação a ser retornada, podendo ser "bio" ou "name"
     * @param info - string contendo a nova informação que substituirá a antiga
     * 
     * @returns retorna a listaCientistas com as informações mudadas
     */
    alterarInfo(id: number, tipo: string, info: string): Array<Pessoa> {
        // encontra a posição na lista em que o id é o mesmo ao inserido, e -1 se inexistente
        const indice: number = this.listaCientistas.findIndex(lista => lista.id === id);
        const idInexistente: number = -1;
        // se o id existir, atualiza a informação para a nova
        if (indice !== idInexistente) { this.listaCientistas[indice][tipo] = info }
        // retorna a lista, independente de alterações
        return this.listaCientistas;
    }
}
