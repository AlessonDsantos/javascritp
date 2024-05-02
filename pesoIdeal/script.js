function calcular(){
//var peso = document.getElementById('peso')
var altura = document.getElementById('alt')
var res = document.getElementById('res')
//var p1 = Number(peso.value)
var fsex = document.getElementsByName('radsex')
var a1 = Number(altura.value)
var fres = 0;
var genero = ''

if (fsex[0].checked){
    genero = 'Homem';
    fres = (72.7 * a1) - 58
} else if ( fsex[1].checked) {
    genero = 'Mulher'
    fres += (62.1 * a1) - 44.7
} 

res.innerHTML = (`Seu peso Ideal é: <strong> ${fres.toFixed(2)} Kg</strong>`)

}





