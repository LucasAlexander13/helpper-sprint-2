class Palavra {
    constructor(palavraInserida) {
        this.vogais = /[aáàãâäeéèêëiíìîïoóòõôöuúùûü]/gi;
        this.palavra = palavraInserida;
    }
    // compara a palavra com as vogais do Regex e retorna a quantidade
    contarVogais() {
        return (this.palavra.match(this.vogais) || []).length;
    }
}
function numVogais() {
    // armazena em contantes os elementos HTML
    const formulario = document.getElementById("formulario");
    const palavraDigitada = document.getElementById("fPalavraDigitada").value;
    // cria um objeto Palavra com a palavra digitada como atributo do objeto 
    const palavraUsuario = new Palavra(palavraDigitada);
    // mostra o resultado da consulta como um window alert e limpa o formulário
    window.alert(`A palavra "${palavraDigitada}" possui: ${palavraUsuario.contarVogais()} vogais.`);
    formulario.reset();
}
//# sourceMappingURL=script.js.map