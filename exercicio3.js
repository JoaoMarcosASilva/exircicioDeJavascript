// 3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, 

// caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e

// imprimir seu valor na tela.

let A = 2
let B = 3
let C
 

if (A === B){
    C = A + B
    console.log(`O resultado da soma entre A: ${A} e B: ${B} é ${C}`)
} else{
    C = A * B
    console.log(`O resultado da multiplicação entre A: ${A} e B: ${B} é ${C}`)
}
