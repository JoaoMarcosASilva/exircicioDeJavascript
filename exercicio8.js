// Encontre o número que falta: Dada uma sequência de números de 1 a N, encontre o número que está faltando.
let N = 5
let listaN = []
let listaNumerica = [1,2,4,5]
let numeroFaltando = []
let numerosFaltou = false

for(let i = 0; i < N; i++){
    listaN.push(i + 1)
}

console.log(`A lista númerica é ${listaNumerica}`)

for(let i = 0; i < N; i++){
    if (listaN[i] !== listaNumerica[i]){
        listaNumerica.splice(i, 0, listaN[i])
        numeroFaltando.push(listaN[i])
        numerosFaltou = true
    }
}

console.log(numerosFaltou ? `Os números que faltam são ${numeroFaltando}` : "Não faltou nenhum número")
