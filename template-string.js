const nome = "Eliana";
const idade = 2023 - 1993;
const cidade = "Rio";


//exemplo  concatenação normal
const apresentacao = "O nome da operadora era " + nome + ", ela tinha " + idade + " anos e morava na cidade do " + cidade;
console.log(apresentacao);


// exemplo template string --> acento grave ` | ${}

 const apresentacao2 = `Ela era uma simples operadora, se chamava ${nome}, 
 tinha cerca de ${idade} anos e sempre morou na cidade ${cidade} mas pretendia se mudar,buscava novos ares`

 console.log(apresentacao2);

 let medo =  "pular";
 let quem = "joaozinho";

 const frase = `${quem} tem muito medo de ${medo}, por isso sempre chama sua mãe, ${nome} para ficar ao seu lado no pula-pula`;

console.log(frase);

medo = "escuro";
quem = "alguém";

const frase2 = `${quem} aqui tem medo de ficar sozinho no ${medo}? Pois eu não tenho!`
console.log(frase2);

medo = "dentista";
quem = "girafas";

const frase3 = `Dizem por aí que as ${quem} morrem de medo de ver um ${medo}, mas elas não precisam se preocupar pois não comem doces e não devem ter cáries`
console.log(frase3);