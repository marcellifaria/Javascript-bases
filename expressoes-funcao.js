//declaração de função: HOISTING 
// Funções são içadas no topo (Var também)
function apresentar (){
    return "O nome da cantora da musica Ego é Beyoncé"
}
console.log(apresentar())

// expressão de função -- (nome opcional que geralmente não é usado - FUNÇÃO ANÔNIMA)
//COMO SE INICIALIZA COM CONST - Só poderá ser chamada após INICIALIZAÇÃO!
const soma = function (num1, num2) {return num1 + num2}
console.log(soma(7, 10))