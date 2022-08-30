console.log(`trabalhando com condicionais`);


const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,


);

const idadeComprador = 19;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis");
console.log(listasDeDestinos);

// if (idadeComprador >= 18) {

//     console.log("comprador maior de idade");
//     listasDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("comprador está acompanhado");
//     listasDeDestinos.splice(1, 1);

// } else {
//     console.log("Comprador nao é maior de idade, não posso vender!");

// }

if ( idadeComprador >= 18 || estaAcompanhada == true
    ) {

    console.log("Autorizado!");
    listasDeDestinos.splice(2, 1);
}  else {
    console.log("Comprador nao é maior de idade, não posso vender!");

}

console.log("Embarque: \n\n")
if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem!")
}else{
    console.log("Nao autorizado!")
}



console.log(listasDeDestinos);






