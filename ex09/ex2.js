/* Functions ou Funções
        - Trecho de código que é executado Somente quando solicitado (Parente gente boa)
        - Trecho de código que pode ser Reutilizado várias vezes

    [ ] O que é uma função e como usar
    [ ] Função VOID (vazia)
    [ ] Função com parâmetros 
    [ ] Função Return
    [ ] Arrow Function
*/

/*void */

function digaMeuNome(){
    console.log('Caio Cestari')
}

/*parametros */

function digaQualquerNome(nome){
    console.log(nome)
}

digaQualquerNome('Caio')
digaQualquerNome('Clodomiro')
digaQualquerNome('Laura')
digaQualquerNome('Claudio')

function soma(n1, n2){
    const resultado = n1 + n2
    console.log(resultado)
}

soma(2,7)

/*return */

function soma(n1, n2){
    const resultado = n1 + n2
    
    return resultado
}

const resultadoDaSoma = soma(39,45)

console.log(resultadoDaSoma) 

/*Arrow Function */

const digaMeuNome2 = () => {
    console.log('Caio')
}

digaMeuNome2()