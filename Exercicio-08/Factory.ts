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
     * retornarPessoa - Método que retorna a instância de uma subclasse da classe Pessoa
     * 
     * @param EnumPessoa que indica o nome da pessoa
     * @returns nova subclasse de pessoa
     */
    retornarPessoa(cientista: EnumPessoa): Pessoa {
        switch(cientista) {
            case EnumPessoa.LOVELACE: 
                return new Lovelace();
            case EnumPessoa.TURING:
                return new Turing();
            case EnumPessoa.TESLA:
                return new Tesla();
            case EnumPessoa.COPERNICO:
                return new Copernico();
            default:
                return undefined;
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
        super(1, EnumPessoa.LOVELACE, "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina.");
        this.homenageAda = 'Sim, por Jean Ichbiah, que criou a linguagem de programação Ada enquanto liderava uma equipe que trabalhava para o Departamento de Defesa dos Estados Unidos.';
    }
}

/**
 * Subclasse de Pessoa
 * 
 * constrói o objeto com as informações de Alan Turing
 */
class Turing extends Pessoa{
    constructor(){
        super(2, EnumPessoa.TURING, "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia.");
    }
}

/**
 * Subclasse de Pessoa
 * 
 * constrói o objeto com as informações de Nikola Tesla
 */
class Tesla extends Pessoa{
    constructor(){
        super(3, EnumPessoa.TESLA, "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.");
    }
}

/**
 * Subclasse de Pessoa
 * 
 * constrói o objeto com as informações de Nicolau Copérnico
 */
class Copernico extends Pessoa{
    constructor(){
        super(4, EnumPessoa.COPERNICO, "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.");
    }
}
