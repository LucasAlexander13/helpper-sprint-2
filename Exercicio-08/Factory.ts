import { Pessoa } from "./Pessoa";
import { EnumPessoa } from "./Enum";

/**
 * FabricaPessoa
 * 
 * Classe utilizada para permitir a instanciação de objetos
 * de acordo com a opção escolhida
 */
export class FabricaPessoa {
    /**
     * retornarPessoa
     * 
     * Método que retorna a instância de uma subclasse da classe Pessoa
     * 
     * @param EnumPessoa que indica o nome da pessoa
     * @returns nova subclasse de pessoa
     */
    retornarPessoa(cientista: EnumPessoa): Pessoa {
        switch(cientista) {
            case EnumPessoa.Lovelace: 
                return new Lovelace();
            case EnumPessoa.Turing:
                return new Turing();
            case EnumPessoa.Tesla:
                return new Tesla();
            case EnumPessoa.Copernico:
                return new Copernico();
            default:
                return null;
        }
    }
}

/**
 * Subclasse de Pessoa
 * 
 * constrói o objeto com as informações de Ada Lovelace
 */
class Lovelace extends Pessoa{
    constructor(){
        super(1, EnumPessoa.Lovelace);
        this.bio = "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina.";
        this.homenageAda = true;
    }
}

/**
 * Subclasse de Pessoa
 * 
 * constrói o objeto com as informações de Alan Turing
 */
class Turing extends Pessoa{
    constructor(){
        super(2, EnumPessoa.Turing);
        this.bio = "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia.";
        this.homenageAda = false;  
    }
}

/**
 * Subclasse de Pessoa
 * 
 * constrói o objeto com as informações de Nikola Tesla
 */
class Tesla extends Pessoa{
    constructor(){
        super(3, EnumPessoa.Tesla);
        this.bio = "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.";
        this.homenageAda = false;
    }
}

/**
 * Subclasse de Pessoa
 * 
 * constrói o objeto com as informações de Nicolau Copérnico
 */
class Copernico extends Pessoa{
    constructor(){
        super(4, EnumPessoa.Copernico);
        this.bio = "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.";
        this.homenageAda = false;
    }
}
