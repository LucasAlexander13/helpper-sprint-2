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
    protected id: number;
    protected name: string;
    protected bio: string;
    public homenageAda: string = 'Não';

    /**
     * Construtor
     * 
     * Caso receba um dos valores (id, name, bio) armazena nas propriedades
     * 
     * @param id - number
     * @param name - string
     * @param bio - string
     */
    constructor(id: number, name: string, bio: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    /**
     * retornarInfo( )
     * 
     * @returns string - retorna os valores formatados do nome e da bio da pessoa
     */
    public retornarInfo(): string {
        return `Nome: ${this.name}\nBio: ${this.bio}`;
    }
}

