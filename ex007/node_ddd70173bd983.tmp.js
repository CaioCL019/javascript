let agora = new Date()
let hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)

if (hora >= 0 && hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora <= 23) {
    console.log('Boa noite!')
} 