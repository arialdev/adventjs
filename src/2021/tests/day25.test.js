import canMouseEat from '../exercices/day25'

describe('Day 25 challenge', () => {
    const room = [
        [' ', ' ', ' '],
        [' ', ' ', 'm'],
        [' ', ' ', '*']
    ];

    test('UP - Blank space', () => {
        expect(canMouseEat('up', room)).toEqual(false);
    });
    test("DOWN - Success", () => {
        expect(canMouseEat('down', room)).toEqual(true);
    });
    test("Right - Outbounds", () => {
        expect(canMouseEat('right', room)).toEqual(false);
    });
    test("LEFT- Blank space", () => {
        expect(canMouseEat('left', room)).toEqual(false);
    });

    const room2 = [
        ['*', ' ', ' ', ' '],
        [' ', 'm', '*', ' '],
        [' ', ' ', ' ', ' '],
        [' ', ' ', ' ', '*']
    ];
    test('UP - Blank space', () => {
        expect(canMouseEat('up', room2)).toEqual(false);
    });
    test("DOWN - Blank space", () => {
        expect(canMouseEat('down', room2)).toEqual(false);
    });
    test("Right - Success", () => {
        expect(canMouseEat('right', room2)).toEqual(true);
    });
    test("LEFT- Blank space", () => {
        expect(canMouseEat('left', room2)).toEqual(false);
    });
})