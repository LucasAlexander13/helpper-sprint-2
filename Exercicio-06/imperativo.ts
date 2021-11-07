// declaração da interface para a lista
interface Pessoa {
    id: number,
    name: string,
    bio: string
}
// declaração da variável 
let lista: Pessoa[] = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanathis.lista_cientistas, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];
/*----------------------------------------------------------------------------------
------------Código em paradigma Imperativo------------------------------------------
----------------------------------------------------------------------------------*/

class Cientistas {
    lista_cientistas: Pessoa[];

    constructor(lista_inserida: Pessoa[]) {
        this.lista_cientistas = lista_inserida;
    }
    // encontra a Bio da lista a partir do id passado como parâmetro
    retornarBio(id: number): string {
        let bio: string;

        for(let indice: number = 0; indice < this.lista_cientistas.length; indice++) {
            if (this.lista_cientistas[indice]['id'] === id) {
                bio = this.lista_cientistas[indice]['bio'];
            }
        }
        return bio;
    }
    // encontra o Name da lista a partir do id passado como parâmetro
    retornarNome(id: number): string {
        let nome: string;

        for(let indice: number = 0; indice < this.lista_cientistas.length; indice++) {
            if (this.lista_cientistas[indice]['id'] === id) {
                nome = this.lista_cientistas[indice]['name'];
            }
        }
        return nome;
    }
    // filtra a lista removendo os itens do id passado
    apagarItem(id: number): Pessoa[] {
        for(let indice: number = 0; indice < this.lista_cientistas.length; indice++) {
            if (this.lista_cientistas[indice]['id'] === id) {
                this.lista_cientistas.splice(indice, 1);
            }
        }
        return this.lista_cientistas;
    }
    // altera informações a partir do id e do tipo de informação
    alterarInfo(id: number, tipo: string, info: string): Pessoa[] {

        for(let indice: number = 0; indice < this.lista_cientistas.length; indice++) {
            if (this.lista_cientistas[indice]['id'] === id) {
                if (tipo === 'name') { this.lista_cientistas[indice]['name'] = info } 
                else if (tipo === 'bio') { this.lista_cientistas[indice]['bio'] = info }
            }
        }
        return this.lista_cientistas;
    }
}