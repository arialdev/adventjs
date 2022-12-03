import missingReindeer from '../exercices/day14'

describe('Day 14 challenge', () => {
    test('Missing half with a few sorted items', () => {
        expect(missingReindeer([0, 2, 3])).toEqual(1);
    });
    test('Missing half with lots of unsorted items', () => {
        expect(missingReindeer([5, 6, 1, 2, 3, 7, 0])).toEqual(4);
    });
    test('Missing last with a few sorted items Pt.2', () => {
        expect(missingReindeer([0, 1])).toEqual(2);
    });
    test('Missing half with a few unsorted items', () => {
        expect(missingReindeer([3, 0, 1])).toEqual(2);
    });
    test('Missing previous to last with a lot of unsorted items', () => {
        expect(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])).toEqual(8);
    });
    test('Missing last with only one item', () => {
        expect(missingReindeer([0])).toEqual(1);
    });
})