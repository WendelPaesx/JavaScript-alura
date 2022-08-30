console.log(`trabalhando com condicionais`);


const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,


);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const Destino = "Rio de Janeiro"

console.log("\n Destinos possiveis");
console.log(listasDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;

while (contador < 4) {
    if (listasDeDestinos[contador] == Destino) {
        console.log("Destino Existe!");
    } else {
        console.log("Destino nao existe");

    }
    contador += 1;
}










