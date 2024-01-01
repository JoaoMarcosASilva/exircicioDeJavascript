// Encontre o menor número em uma lista: Escreva um programa para encontrar o menor número em uma lista de valores.

let listaNumero = [1,-1,5,-3, -10, 9]
let menorNumero

menorNumero = listaNumero[0]

for (let i = 0; i < listaNumero.length; i++){
    if (menorNumero > listaNumero[i]){
        menorNumero = listaNumero[i]    
    }
}

console.log(`O menor número da lista ${listaNumero} é ${menorNumero}`)
