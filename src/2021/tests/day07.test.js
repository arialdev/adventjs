import contains from '../exercices/day07'

describe('Day 7 challenge', () => {
    test('Existing result in 3 level depth', () => {
        const almacen = {
            'estanteria1': {
                'cajon1': {
                    'producto1': 'coca-cola',
                    'producto2': 'fanta',
                    'producto3': 'sprite'
                }
            },
            'estanteria2': {
                'cajon1': 'vacio',
                'cajon2': {
                    'producto1': 'pantalones',
                    'producto2': 'camiseta' // <- ¡Está aquí!
                }
            }
        }
        expect(contains(almacen, 'camiseta')).toBeTruthy();
    });
    test('No existing item', () => {
        const otroAlmacen = {
            'baul': {
                'fondo': {
                    'objeto': 'cd-rom',
                    'otro-objeto': 'disquette',
                    'otra-cosa': 'mando'
                }
            }
        }
        expect(contains(otroAlmacen, 'gameboy')).toBeFalsy();
    });
})