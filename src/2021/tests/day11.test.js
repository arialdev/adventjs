import shouldBuyFidelity from '../exercices/day11'

describe('Day 11 challenge', () => {
    test('1 ticket', () => {
        expect(shouldBuyFidelity(1)).toBeFalsy();
    });
    test('100 tickets', () => {
        expect(shouldBuyFidelity(100)).toBeTruthy();
    });
})