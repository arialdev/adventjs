import maxProfit from '../exercices/day08'

describe('Day 8 challenge', () => {
    test('The price varies along the day', () => {
        expect(maxProfit([39, 18, 29, 25, 34, 32, 5])).toEqual(16);
    });
    test('Every hour the price is higher', () => {
        expect(maxProfit([10, 20, 30, 40, 50, 60, 70])).toEqual(60);
    });
    test('Every hour the price is lower: Impossible profit', () => {
        expect(maxProfit([18, 15, 12, 11, 9, 7])).toEqual(-1);
    });
    test('The price is inmutable: Impossible profit', () => {
        expect(maxProfit([3, 3, 3, 3, 3])).toEqual(-1);
    });
})