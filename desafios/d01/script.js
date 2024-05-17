function verificar() {
anobi = document.querySelector('#txt')
res = document.querySelector('#res')
year = Number(anobi.value)
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        alert('Ano Bissexto')
    } else {
        alert('Não Bissexto')
    }
}