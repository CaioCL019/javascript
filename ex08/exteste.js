// Primeiro fazer o algoritmo do codigo: O significado de algoritmo é um conjunto de regras ou instruções para resolver um problema ou realizar uma tarefa. Ele é a base para a programação, pois define a sequência de passos necessários para alcançar um objetivo específico.
// Logica de programação: É como você pensa para resolver um problema.

//Fazer uma calculadora de média de notas, onde o usuário irá digitar as notas e o sistema irá calcular a média e mostrar se o aluno foi aprovado ou reprovado. A média para aprovação é 7.

// Passo 1: Solicitar ao usuário que digite as notas 
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Passo 2: Calcular a média das notas
let media = (nota1 + nota2 + nota3) / 3;

// Passo 3: Verificar se o aluno foi aprovado ou reprovado
if (media >= 7) {
    alert("Parabéns! Você foi aprovado com sua média de " + media.toFixed(2));
    }
 else {
    alert("Você foi reprovado com sua média de " + media.toFixed(2));
}

