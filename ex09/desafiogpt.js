// 1 - Mostrar pedidos não entregues: Exibir no console uma mensagem para cada pedido que ainda não foi entregue no formato:
// Pedido X do cliente Y ainda NÃO foi entregue.
// 2 - Calcular o faturamento total: Somar todos os valores (total) dos pedidos e mostrar:
//  Faturamento total: R$ XXXX
// 3 - Calcular o faturamento APENAS dos pedidos entregues: Somar apenas os pedidos com delivered === true:
//  Faturamento com pedidos entregues: R$ xxxx
// 4 - Criar um novo array manualmente: Crie um novo array chamado report contendo objetos assim:
/* {
    client: 'Nome',
    status: 'Entregue' ou 'Pendente'
}
Usar forEach (não pode usar map)
Usar .push()
*/
//5 - Mostrar no console qual foi o pedido mais caro: Pedido mais caro: Cliente X - R$ XXXX


const orders = [
    { id: 1, client: 'Rodolfo', total: 150, delivered: true },
    { id: 2, client: 'Aline', total: 200, delivered: false },
    { id: 3, client: 'Paulo', total: 99, delivered: true },
    { id: 4, client: 'Maria', total: 350, delivered: false },
    { id: 5, client: 'João', total: 120, delivered: true }
];

const report = []

let maiorPedido = 0
let clienteMaiorPedido = ''

let faturamentoTotal = 0 

let faturamentoEntregues = 0

orders.forEach((orders) => {
    if(orders.delivered == false){
        console.log(`Pedido ${orders.id} do(a) cliente ${orders.client} ainda NÃO foi entregue.`)
    };

    faturamentoTotal = faturamentoTotal + orders.total;

    if(orders.delivered === true){
        faturamentoEntregues = faturamentoEntregues + orders.total
    };

    if(orders.total > maiorPedido){
        maiorPedido = orders.total
        clienteMaiorPedido = orders.client
    }

    let status = ''
    if(orders.delivered === true){
        status = 'Entregue'
    }else {
        status = 'Pendente'
    }

    report.push({
        client: orders.client,
        status: status
    })
});

console.log(`Faturamento total: R$ ${faturamentoTotal}`);

console.log(`Faturamento com pedidos entregues: R$ ${faturamentoEntregues}`);

console.log(`Pedido mais caro: Cliente ${clienteMaiorPedido} - R$ ${maiorPedido}`);