class Palavra {
    private readonly vogais: RegExp = /[aáàãâäeéèêëiíìîïoóòõôöuúùûü]/gi
    private palavra: string;

    constructor(palavraInserida: string) {
        this.palavra = palavraInserida;
    }
    // compara a palavra com as vogais do Regex e retorna a quantidade
    public contarVogais(): number {
        return (this.palavra.match(this.vogais) || []).length;
    }
}

function numVogais() {
    // armazena em contantes os elementos HTML
    const formulario: HTMLFormElement = document.getElementById("formulario") as HTMLFormElement;
    const palavraDigitada: string = (document.getElementById("fPalavraDigitada") as HTMLInputElement).value;
    // cria um objeto Palavra com a palavra digitada como atributo do objeto 
    const palavraUsuario: Palavra = new Palavra(palavraDigitada);
    // mostra o resultado da consulta como um window alert e limpa o formulário
    window.alert(`A palavra "${palavraDigitada}" possui: ${palavraUsuario.contarVogais()} vogais.`);
    formulario.reset()
}