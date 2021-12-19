import learn from '../src/day19'

describe('Day 19 challenge', () => {
    test('Items without parenthesis but with repetitions', () => {
        expect(learn(10, [2, 3, 8, 1, 4])).toEqual([0, 2]);
    });
    test('Items without parenthesis but with repetitions', () => {
        expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2]);
    });
    test('Items without parenthesis but with repetitions', () => {
        expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1]);
    });
    test('Items without parenthesis but with repetitions', () => {
        expect(learn(8, [8, 2, 1])).toEqual([1, 2]);
    });
    test('Items without parenthesis but with repetitions', () => {
        expect(learn(8, [8, 2, 1, 4, 3])).toEqual([3, 4]);
    });
    test('Items without parenthesis but with repetitions', () => {
        expect(learn(4, [10, 14, 20])).toBeNull();
    });
    test('Items without parenthesis but with repetitions', () => {
        expect(learn(5, [5, 5, 5])).toBeNull();
    });
})