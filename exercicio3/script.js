//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \'BOAS VINDAS mas não deixe o gato sair\' "
console.log(frase)

const trocar = frase.replace("verde","rosa")
const trocar2 = trocar.replace("azul","laranja")
console.log(trocar2)

console.log(trocar2.includes("verde"))
console.log(trocar2.includes("laranja"))

