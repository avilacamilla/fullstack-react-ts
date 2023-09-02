//Criando interfaces
interface Person {
    name: string,
    age: number,
    address?: string //'?' antes torna esse objeto opcional
}

const pessoa: Person = {
    name: 'Camilla',
    age: 29,
    address: 'Rua das Flores - Girassol - Rio de Janeiro, RJ'
}