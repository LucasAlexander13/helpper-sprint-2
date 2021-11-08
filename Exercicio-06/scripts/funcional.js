// declaração da variável 
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoananova_lista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/*----------------------------------------------------------------------------------
------------Código em paradigma Funcional-------------------------------------------
----------------------------------------------------------------------------------*/
class Cientistas {
    constructor(listaInserida) {
        this.listaCientistas = listaInserida;
    }
    // encontra a informação da lista a partir do id passado como parâmetro
    retornarInfo(id, tipo) {
        var _a;
        return (_a = this.listaCientistas.find((pessoa) => pessoa.id === id)) === null || _a === void 0 ? void 0 : _a[tipo];
    }
    // filtra a lista removendo os itens do id passado
    apagarItem(id) {
        return this.listaCientistas.filter((pessoa) => pessoa.id !== id);
    }
    // altera informações a partir do id e do tipo de informação
    alterarInfo(id, tipo, info) {
        // encontra a posição na lista em que o id é o mesmo ao inserido, e -1 se inexistente
        const indice = this.listaCientistas.findIndex(lista => lista.id === id);
        const idInexistente = -1;
        // se o id existir, atualiza a informação para a nova
        if (indice !== idInexistente) {
            this.listaCientistas[indice][tipo] = info;
        }
        // retorna a lista, independente de alterações
        return this.listaCientistas;
    }
}
//# sourceMappingURL=funcional.js.map