import { EnumPessoa } from "./Enum";
import { FabricaPessoa } from "./Factory";
//a) Após a leitura, crie uma Factory que, a partir da lista do exercício 6, 
//dado um array, devolva o nome e a bio da pessoa.
let fabrica = new FabricaPessoa();
let ada = fabrica.retornarPessoa(EnumPessoa.Lovelace);
console.log(ada.retornarInfo());
//b) Crie um código que responda quem criou a linguagem de programação Ada, 
//essa resposta precisa estar como propriedade do objeto da pessoa relacionada.
console.log(ada.homenageAda);
//# sourceMappingURL=script.js.map