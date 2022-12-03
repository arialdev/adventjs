import contarOvejas from '../exercices/day01'

describe('Day 1 challenge', () => {
    test('filters sheeps by their color & name', () => {
        const sheeps = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' },
            { name: 'AAAAAaaaaa', color: 'rojo' },
            { name: 'Nnnnnnnn', color: 'rojo' }
        ]

        expect(contarOvejas(sheeps)).toEqual([
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' },
        ])
    })
})