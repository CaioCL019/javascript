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
        alert('tudo ok');
    }
}