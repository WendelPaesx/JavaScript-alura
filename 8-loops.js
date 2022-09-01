console.log(`trabalhando com condicionais`);


const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,


);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const Destino = "Salvador"

console.log("\n Destinos possiveis");
console.log(listasDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listasDeDestinos[contador] == Destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste)
if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, solicitacao nao concluida. ");
}


for (let i = 0; i < 3; i ++) {
    if (listasDeDestinos[i] == Destino) {
        destinoExiste = true;

    }

}









