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

 