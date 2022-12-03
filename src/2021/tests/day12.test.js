import getMinJump from '../exercices/day12'

describe('Day 12 challenge', () => {
    test('Unsorted obstacles: medium jump', () => {
        expect(getMinJump([5, 3, 6, 7, 9])).toEqual(4);
    });
    test('Unsorted obstacles: big jump', () => {
        expect(getMinJump([2, 4, 6, 8, 10])).toEqual(7);
    });
    test('Ascending sorted obstacles', () => {
        expect(getMinJump([1, 2, 3, 5])).toEqual(4);
    });
    test('Unsorted obstacles: small jump', () => {
        expect(getMinJump([3, 7, 5])).toEqual(2);
    });
    test('Descending sorted obstacles', () => {
        expect(getMinJump([9, 5, 1])).toEqual(2);
    });
})