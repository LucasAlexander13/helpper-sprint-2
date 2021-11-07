class Palavra {
    constructor(palavra_inserida) {
        this.vogais = /[aáàãâäeéèêëiíìîïoóòõôöuúùûü]/gi;
        this.palavra = palavra_inserida;
    }
    contarVogais() {
        let num_vogais = (this.palavra.match(this.vogais) || []).length;
        return num_vogais;
    }
}
const nome = new Palavra('Lucas');
const sobrenome = new Palavra('Alexander');
console.log(`${nome.palavra} possui ${nome.contarVogais()} vogais.`);
console.log(`${sobrenome.palavra} possui ${sobrenome.contarVogais()} vogais.`);
let continuar = true;
let palavra_usuario;
while (continuar === true) {
    palavra_usuario = new Palavra(window.prompt('Digite uma palavra: '));
    console.log(palavra_usuario.palavra);
    window.alert(`O número de vogais da palavra é: ${palavra_usuario.contarVogais()}`);
    console.log(palavra_usuario.contarVogais());
    continuar = window.confirm("Deseja inserir outra palavra?");
}
//# sourceMappingURL=script.js.map