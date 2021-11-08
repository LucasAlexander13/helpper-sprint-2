// declaração da variável 
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanathis.listaCientistas, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/*----------------------------------------------------------------------------------
------------Código em paradigma Imperativo------------------------------------------
----------------------------------------------------------------------------------*/
class Cientistas {
    constructor(listaInserida) {
        this.listaCientistas = listaInserida;
    }
    // encontra a informação da lista a partir do id passado como parâmetro
    retornarInfo(id, tipo) {
        let info;
        for (let indice = 0; indice < this.listaCientistas.length; indice++) {
            if (this.listaCientistas[indice]['id'] === id) {
                info = this.listaCientistas[indice][tipo];
            }
        }
        return info;
    }
    // filtra a lista removendo os itens do id passado
    apagarItem(id) {
        for (let indice = 0; indice < this.listaCientistas.length; indice++) {
            if (this.listaCientistas[indice]['id'] === id) {
                this.listaCientistas.splice(indice, 1);
            }
        }
        return this.listaCientistas;
    }
    // altera informações a partir do id e do tipo de informação
    alterarInfo(id, tipo, info) {
        for (let indice = 0; indice < this.listaCientistas.length; indice++) {
            if (this.listaCientistas[indice]['id'] === id) {
                if (tipo === 'name') {
                    this.listaCientistas[indice]['name'] = info;
                }
                else if (tipo === 'bio') {
                    this.listaCientistas[indice]['bio'] = info;
                }
            }
        }
        return this.listaCientistas;
    }
}
//# sourceMappingURL=imperativo.js.map