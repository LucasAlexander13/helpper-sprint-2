class Palavra {
    private readonly vogais: RegExp = /[aáàãâäeéèêëiíìîïoóòõôöuúùûü]/gi
    palavra: string;

    constructor(palavraInserida: string) {
        this.palavra = palavraInserida;
    }

    public contarVogais(): number {
        let numVogais = (this.palavra.match(this.vogais) || []).length;
        return numVogais;
    }
}

const nome: Palavra = new Palavra('Lucas');
const sobrenome: Palavra = new Palavra('Alexander');

console.log(`${nome.palavra} possui ${nome.contarVogais()} vogais.`);
console.log(`${sobrenome.palavra} possui ${sobrenome.contarVogais()} vogais.`);

let continuar: boolean = true;
let palavraUsuario: Palavra;

while (continuar === true){
    palavraUsuario = new Palavra(window.prompt('Digite uma palavra: '));
    console.log(palavraUsuario.palavra);

    window.alert(`O número de vogais da palavra é: ${palavraUsuario.contarVogais()}`);
    console.log(palavraUsuario.contarVogais());
    
    continuar = window.confirm("Deseja inserir outra palavra?");
}