console.log(`trabalhando com listas`);
// const salvador =`Salvador`;
// const sãoPaulo =`São Paulo`;
// const riodeJaneiro =`Rio de Janeiro`;


const listasDeDestinos = new Array(
    `Salvador`, 
    `São Paulo`,
    `Rio de Janeiro`,
    

);
 listasDeDestinos.push(`curitiba`);// adicionando um item na listasDeDestinos
console.log("Destinos possiveis");
console.log(listasDeDestinos);

listasDeDestinos.splice(1,1);
console.log(listasDeDestinos);
console.log(listasDeDestinos[1],listasDeDestinos[0]);





