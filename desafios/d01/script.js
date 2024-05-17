function verificar() {
var anobi = document.querySelector('#txt')
var res = document.querySelector('#res')
var year = Number(anobi.value)
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        res.innerHTML = 'Ano Bissexto'
        
    } else { res.innerHTML = 'Não bissexto'
        
    }
}