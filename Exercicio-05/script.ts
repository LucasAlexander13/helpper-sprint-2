class Palavra {
    vogais: RegExp = /[aáàãâäeéèêëiíìîïoóòõôöuúùûü]/gi
    palavra: string;

    constructor(palavra_inserida: string) {
        this.palavra = palavra_inserida;
    }

    public contarVogais(): number {
        let num_vogais = (this.palavra.match(this.vogais) || []).length;
        return num_vogais;
    }
}

const nome: Palavra = new Palavra('Lucas');
const sobrenome: Palavra = new Palavra('Alexander');

console.log(`${nome.palavra} possui ${nome.contarVogais()} vogais.`);
console.log(`${sobrenome.palavra} possui ${sobrenome.contarVogais()} vogais.`);

let continuar: boolean = true;
let palavra_usuario: Palavra;

while (continuar === true){
    palavra_usuario = new Palavra(window.prompt('Digite uma palavra: '));
    console.log(palavra_usuario.palavra);

    window.alert(`O número de vogais da palavra é: ${palavra_usuario.contarVogais()}`);
    console.log(palavra_usuario.contarVogais());
    
    continuar = window.confirm("Deseja inserir outra palavra?");
}