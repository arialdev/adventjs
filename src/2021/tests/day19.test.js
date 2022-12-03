import learn from '../exercices/day19'

describe('Day 19 challenge', () => {
    test('The first and the third courses are the solution', () => {
        expect(learn(10, [2, 3, 8, 1, 4])).toEqual([0, 2]);
    });
    test('The middle courses are the solution', () => {
        expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2]);
    });
    test('The first two courses are the solution', () => {
        expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1]);
    });
    test('The first course duration is the same as the requested one, so wo need other combination', () => {
        expect(learn(8, [8, 2, 1])).toEqual([1, 2]);
    });
    test('Last two courses', () => {
        expect(learn(8, [8, 2, 1, 4, 3])).toEqual([3, 4]);
    });
    test('All courses has a longer duration than the requested one', () => {
        expect(learn(4, [10, 14, 20])).toBeNull();
    });
    test('All courses has the same duration, impossible to match with other courses', () => {
        expect(learn(5, [5, 5, 5])).toBeNull();
    });
})