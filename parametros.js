function soma (numero1, numero2) {
    return numero1 + numero2;
    } 


console.log(soma (58, 20));
console.log(soma(550,90));
console.log(soma(70,-10));

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}


console.log(nomeIdade(40, "Arlete"))
console.log(nomeIdade("Thomas", 55))

/* estabelecendo um valor default, para caso nao receba o argumento 
será multiplicado por este valor na função, caso receba o argumento, 
o valor erá substituído!*/
function multiplica (numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                          //18           //2
console.log(multiplica (soma(8,10), soma(0,2)));

// só um argumento sendo passado -> vai considerar o valor cadastrado como padrão!
console.log(multiplica (soma(3,10)));