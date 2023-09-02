//Criando interfaces
interface Person {
    name: string,
    age: number,
    address?: string //'?' antes torna esse objeto opcional
}

const firstPerson: Person = {
    name: 'Camilla',
    age: 29,
    address: 'Rua das Flores - Girassol - Rio de Janeiro, RJ',
}

const secondPerson: Person = {
    name: 'Otto',
    age: 4,
}

const arrayPerson: Person[] = [
    firstPerson,
    secondPerson
]

const arrayPersonNumber: number[] = [
    12, 13, 21
]

const arrayNamePersons: string[] = [
    'Camilla', 'Otto', 'Rafael'
]