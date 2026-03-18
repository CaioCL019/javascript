/*
        ForEach(item, index, array)

        item) - Dados/Informações contidos na posição atual do Array
        index) - Número da Posição. Sempre começando em 0.
        array) - Retorna o Array completo


*/

const users = [
    { name: 'Rodolfo', age: 33, contact: '(19) 94343-3434'},
    { name: 'Paulo', age: 21, contact: '(12) 95343-3434'},
    { name: 'Aline', age: 25, contact: '(11) 94343-3224'},
    { name: 'Maria', age: 12, contact: '(13) 94343-3674'},
]

users.forEach(function(item, index){
    if(item.age < 18){
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade.`)
    }
})


/* Usando Arrow Function
const users = [
    { name: 'Rodolfo', age: 33, contact: '(19) 94343-3434'},
    { name: 'Paulo', age: 21, contact: '(12) 95343-3434'},
    { name: 'Aline', age: 45, contact: '(11) 94343-3224'},
    { name: 'Maria', age: 12, contact: '(13) 94343-3674'},
]

users.forEach((item, index) => {
    if (item.age < 18) {
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade.`);
    }
}); */


