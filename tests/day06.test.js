import sumPairs from '../src/day06'

describe('Day 6 challenge', () => {
    test('First and last', () => {
        expect(sumPairs([3, 5, 7, 2], 10)).toEqual([3, 7])
    });
    test('None', () => {
        expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull()
    });
    test('First two', () => {
        expect(sumPairs([2, 2, 3, 1], 4)).toEqual([2, 2])
    });
    test('First and last Pt. 2', () => {
        expect(sumPairs([6, 7, 1, 2], 8)).toEqual([6, 2])
    });
    test('Last two Pt. 2', () => {
        expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toEqual([1, 5])
    });
})