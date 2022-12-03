import getCoins from '../exercices/day10'

describe('Day 10 challenge', () => {
    test('51 cents', () => {
        expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1]);
    });
    test('3 cents', () => {
        expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0]);
    });
    test('5 cents', () => {
        expect(getCoins(5)).toEqual([0, 0, 1, 0, 0, 0]);
    });
    test('16 cents', () => {
        expect(getCoins(16)).toEqual([1, 0, 1, 1, 0, 0]);
    });
    test('1 euro (100 cents)', () => {
        expect(getCoins(100)).toEqual([0, 0, 0, 0, 0, 2]);
    });
})