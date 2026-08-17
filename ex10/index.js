function verificar() {
    const data = new Date();
    const anoAtual = data.getFullYear();
    const fanoInput = document.getElementById('txtano');
    const resDiv = document.querySelector('div#res');

    const anoDigitado = parseInt(fanoInput.value);
    
    if (!fanoInput.value || 
        fanoInput.value.length < 4 || 
        isNaN(anoDigitado) || 
        anoDigitado <= 0 || 
        anoDigitado > anoAtual) {
        alert('[ERRO] TENTE NOVAMENTE!');
    } else {
        const fsex = document.getElementsByName('radsex')
        const idade = anoAtual - Number(fanoInput.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Crianca
            } else if (idade < 21){
                // Jovem
            } else if (idade < 50){
                // Adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}