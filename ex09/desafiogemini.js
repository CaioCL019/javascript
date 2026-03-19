/*Desafio: O Gestor de Estoque e Faturamento
Você recebeu uma lista de produtos de um e-commerce. Cada produto tem nome, preço unitário e a quantidade vendida no dia.

O que você deve fazer:

1 - Crie um array de objetos chamado produtos com as seguintes informações:

Mouse: R$ 50,00 | Qtd: 3

Teclado: R$ 120,00 | Qtd: 2

Monitor: R$ 900,00 | Qtd: 1

Tapete Mouse: R$ 25,00 | Qtd: 5

2 - Utilize o forEach para percorrer esse array.

3 - Dentro do loop, você deve:

Calcular o valor total de cada item (Preço x Quantidade).

Exibir no console uma mensagem formatada: "Produto: [NOME] - Total: R$ [VALOR_TOTAL]".

4 - O "Pulo do Gato": Crie uma variável fora do forEach chamada faturamentoTotal (começando em 0) e, a cada iteração do loop, some o valor total de cada produto a essa variável.

5 - Após o término do forEach, exiba no console o valor final do faturamentoTotal com a mensagem: "O faturamento total do dia foi: R$ [VALOR]".
*/

const produtos = [
    {item: 'mouse', preço: 50,quantidade: 3,},
    {item: 'teclado', preço: 120,quantidade: 2,},
    {item: 'monitor', preço: 900,quantidade: 1,},
    {item: 'tapete mouse', preço: 25,quantidade: 5,},
];

let faturamentoTotal = 0

produtos.forEach((produto) => {
    const valorDesteProduto = produto.preço * produto.quantidade;

    console.log(`Produto: ${produto.item} - Total R$ ${valorDesteProduto}`);

    faturamentoTotal += valorDesteProduto;
});

console.log(`O faturamento total do dia foi: R$ ${faturamentoTotal}`);