/* 


If & Else -> Controlador de Fluxo

if(Se)
Else(Se não)


Operadores de Comparação
    > maior que
    < menor que
    == igual que (Compara apenas o valor)
    === igual que (Compara o valor e o tipo)
    >= maior ou igual que
    <= menor ou igual que


const notadoAluno = 3

if(notadoAluno >= 6){
    console.log('Aluno APROVADO')
}else {
    console.log('Aluno está REPROVADO')
}
    */
   
let notas = {
     materia1: 10,
     materia2: 6,
     materia3: 5,
     materia4: 3,
     materia5: 3,
     materia6: 3,
};

let media = (notas.materia1 + notas.materia2 + notas.materia3 + notas.materia4 + notas.materia5 + notas.materia6) / 6;

if(media >= 5){
    console.log('Aprovado')
}else {
    console.log('Reprovado')
}


