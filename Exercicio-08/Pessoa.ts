/**
 * Pessoa
 * @class
 * Classe base que serve para criar objetos do tipo pessoa
 * 
 * @property id - number
 * @property name - string
 * @property bio - string
 */
export abstract class Pessoa {
    protected id: number;
    protected name: string;
    protected bio: string;
    homenageAda: boolean;

    /**
     * @constructor
     * Caso receba um dos valores (id, name, bio) armazena nas propriedades
     * 
     * @param id - number
     * @param name - string
     * @param bio - string
     */
    constructor(id?: number, name?: string, bio?: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    /**
     * @method retornarInfo( )
     * 
     * @returns string - etorna os valores formatados do nome e da bio da pessoa
     */
    public retornarInfo(): string {
        return `Nome: ${this.name}\nBio: ${this.bio}`
    }
}

