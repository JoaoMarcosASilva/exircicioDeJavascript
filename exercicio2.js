// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let numero = -40

if (numero % 2  == 0){
    console.log(`O número ${numero} é par e`, numero > 0 ? "e o número é postivo" : "O número é negativo")
} else {
    console.log(`O número ${numero} é impar e`, numero > 0 ? "e o número é postivo" : "O número é negativo")
}
