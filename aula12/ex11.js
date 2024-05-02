/*var idade = 20
if (idade < 16) {
    console.log('Nao Vota')
} else {
    if (idade < 18) {
        console.log('Voto Opcional')
    } else {
        console.log('Voto Obrigatorio')
    }
}*/

var idade = 28
console.log(`Voce tem ${idade} Anos`)
if (idade < 16) {
    console.log('Nao Vota')
} else if (idade < 18 || idade > 67) {
    console.log('Voto Opcional')
} else {
    console.log('Voto Obrigatorio')
}
