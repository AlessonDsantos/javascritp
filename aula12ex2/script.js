function verificar(){
var data = new Date()
var ano = data.getFullYear
var fano = document.querySelector('#textano')
var res = document.querySelector('#res')
 if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
 } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade Calculada: ${idade}`
    
 }

}