import countDecorations from '../exercices/day22'

describe('Day 22 challenge', () => {
    test('Small tree', () => {
        const tree = {
            value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
            left: {
                value: 2, // el nodo izquierdo necesita dos decoraciones
                left: null, // no tiene más ramas
                right: null // no tiene más ramas
            },
            right: {
                value: 3, // el nodo de la derecha necesita tres decoraciones
                left: null, // no tiene más ramas
                right: null // no tiene más ramas
            }
        }
        expect(countDecorations(tree)).toEqual(6);
    });
    test('Bigger tree', () => {
        const bigTree = {
            value: 1,
            left: {
                value: 5,
                left: {
                    value: 7,
                    left: {
                        value: 3,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: {
                value: 6,
                left: {
                    value: 5,
                    left: null,
                    right: null
                },
                right: {
                    value: 1,
                    left: null,
                    right: null
                }
            }
        }
        expect(countDecorations(bigTree)).toEqual(28)
    });
})