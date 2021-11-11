import { EnumPessoa } from "./Enum";
import { FabricaPessoa } from "./Factory";
import { Pessoa } from "./Pessoa";

//a) Após a leitura, crie uma Factory que, a partir da lista do exercício 6, 
//dado um array, devolva o nome e a bio da pessoa.
let fabrica: FabricaPessoa = new FabricaPessoa();
let ada: Pessoa = fabrica.retornarPessoa(EnumPessoa.Lovelace);
console.log(ada.retornarInfo());

//b) Crie um código que responda quem criou a linguagem de programação Ada, 
//essa resposta precisa estar como propriedade do objeto da pessoa relacionada.
console.log(ada.homenageAda);
