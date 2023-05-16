 /*função anônima que é inciada com a variável function (essa sim tem nome)
 Utiliza seta  e não usa chaves (caso tenha só uma linha)
 Caso tenha mais que uma linha será necessário usar chave e return
 No parâmetro, só é necessário usar parentesis caso possua mais de um - Parâmetro 
 Em relação ao hoisting - arrow function se comporta como a expressão de função por causa do const*/

 //declaração de função
 function escolha (musica) {
    return  `toque a faixa 4, é chamada ${musica}`;
 }
 console.log (escolha ("Una Cancion"))

 // arrow function
const apresentaArrow = nome => `meu nome é ${nome}`;
console.log(apresentaArrow("Yolanda"))

const soma = (num1, num2) => num1 + num2;
console.log(soma(85,10))

// arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 >10 ) {
        return "somente números de 1 a 9"
    }else {
        return num1 + num2;
    }
}

console.log (somaNumerosPequenos(50, 2))
console.log (somaNumerosPequenos(9, 1))