import checkSledJump from '../src/day15'

describe('Day 15 challenge', () => {
    test('Missing half with a few sorted items', () => {
        expect(checkSledJump([1, 2, 3, 2, 1])).toBeTruthy();
    });
    test('Missing half with lots of unsorted items', () => {
        expect(checkSledJump([0, 1, 0])).toBeTruthy();
    });
    test('Missing last with a few sorted items Pt.2', () => {
        expect(checkSledJump([0, 3, 2, 1])).toBeTruthy();
    });
    test('Missing half with a few unsorted items', () => {
        expect(checkSledJump([0, 1000, 1])).toBeTruthy();
    });
    test('Missing previous to last with a lot of unsorted items', () => {
        expect(checkSledJump([2, 4, 4, 6, 2])).toBeFalsy();
    });
    test('Missing last with only one item', () => {
        expect(checkSledJump([1, 2, 3])).toBeFalsy();
    });
    test('Missing last with only one item', () => {
        expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBeFalsy();
    });
})