/*
    Map (Mapear item por item do Array)
        - Criar um novo array com a mesma quantidade de itens do array original.
        - O novo array voce pode alterar o que quiser em relacao ao array original.
        - Voce tem acesso a 3 dados:
            - Item por item do array
            - Posicao atual do array
            - Array completo

    Reduce(Reduzir o array a um unico valor)
        - Reduz um array inteiro a um unico valor
        - Voce tem acesso a 4 dados:
            - Acumulador
            - Valor Atual
            - Posicao atual
            - Valor completo

    Filter(Filtrar o Array)
        - Cria um novo array filtrando os valores desejados do array Original
        - Voce tem acesso a 3 dados:
            - Item por Item do array    
            - Posicao atual do array
            - Array completo

*/

// Desafio: Adicionar mais 10 produtos em cada, filtrar so os produtos com desconto e quanto é o faturamento total dos produtos com desconto

const produtos = [
  { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1 },
  { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3 },
  { id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, quantidade: 5 },
  { id: 4, nome: "Fone de Ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2 },
  { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1 },
  { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8 },
  { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2 },
  { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7 },
  { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5 },
  { id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 }
];

// Criando a logica e algoritmo

// 1 - Adicionar +10 em cada produto
// 2 - Filtrar so os em promocao
// 3 - Faturamento se vender todos em promocao

const faturamentoTotal = produtos.map( produto => {
    return {...produto, quantidade: produto.quantidade + 10}
}).filter( produto => produto.temDesconto).reduce(( acumulador, produto) => acumulador + produto.quantidade * produto.preco, 0,);

console.log(faturamentoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))