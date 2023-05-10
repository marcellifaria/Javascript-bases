const nome = "Rayanne";
const fome = false;
const doce = "açaí";
const salgado = "pipoca";

const pedido = `${nome} diz: "por favor, quero comer ${fome != true ? doce : salgado}"`
console.log(pedido)

const dizendoAlgo = `${fome == true ? salgado : doce} é minha comida favorita, sempre diz ${nome}`
console.log(dizendoAlgo)