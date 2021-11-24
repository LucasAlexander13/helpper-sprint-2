/**
 * Pessoa
 *
 * Classe base que serve para criar objetos do tipo pessoa
 *
 * id - number
 * name - string
 * bio - string
 */
export class Pessoa {
    /**
     * Construtor
     *
     * Caso receba um dos valores (id, name, bio) armazena nas propriedades
     *
     * @param id - number
     * @param name - string
     * @param bio - string
     */
    constructor(id, name, bio) {
        this.homenageAda = false;
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    /**
     * retornarInfo( )
     *
     * @returns string - retorna os valores formatados do nome e da bio da pessoa
     */
    retornarInfo() {
        return `Nome: ${this.name}\nBio: ${this.bio}`;
    }
}
//# sourceMappingURL=Pessoa.js.map