/*

    Estrutura de Repetição - LOOP
        -FOR IN
        - Usado para interar Objetos


*/


const user = {
    name: 'Caio',
    age: 33,
    street: "Rua da tontolandia"
}

for(let key in user){
    console.log(`${key} : ${user[key]}`)
}