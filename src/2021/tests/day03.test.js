import isValid from '../exercices/day03'

describe('Day 3 challenge', () => {
    test('is valid letter without parenthesis', () => {
        expect(isValid('bici coche peluche')).toBeTruthy()
    })

    test('is valid letter with one parenthesis', () => {
        expect(isValid('bici coche (balón) peluche')).toBeTruthy()
    })

    test('is valid letter with two parenthesis', () => {
        expect(isValid('bici coche (balón) tren (moto) peluche')).toBeTruthy()
    })

    test('is valid letter starting with parenthesis', () => {
        expect(isValid('(bici) coche peluche')).toBeTruthy()
    })

    test('is valid letter finishing with parenthesis', () => {
        expect(isValid('bici coche (peluche)')).toBeTruthy()
    })

    test('is invalid letter with empty parenthesis', () => {
        expect(isValid('bici () peluche')).toBeFalsy()
    })

    test('is invalid letter with unclosed parenthesis', () => {
        expect(isValid('bici (coche peluche')).toBeFalsy()
        expect(isValid('bici (coche) (peluche')).toBeFalsy()
    })

    test('is invalid letter with invalid chracters', () => {
        expect(isValid('bici (tren [coche) peluche')).toBeFalsy()
        expect(isValid('bici (tren ]coche) peluche')).toBeFalsy()
        expect(isValid('bici (tren {coche) peluche')).toBeFalsy()
        expect(isValid('bici (tren }coche) peluche')).toBeFalsy()
    })

    // test('is invalid letter with unpair parenthesis', () => {
    //     expect(isValid('bici coche (tren (moto) peluche')).toBeFalsy()
    //     expect(isValid('bici (coche) (tren (moto) peluche')).toBeFalsy()
    // })
})