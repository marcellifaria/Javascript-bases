//DECLARAÇÃO DE FUNÇÃO

// 1) declara a função

function imprimeTexto (texto){
    console.log (texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto ("oi");
imprimeTexto ("Outro texto");
imprimeTexto(soma());

function soma (){
    return 2+2;
}
console.log(soma());