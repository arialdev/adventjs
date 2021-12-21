import canCarry from '../src/day21'

describe('Day 21 challenge', () => {
    test("Cannot go to the first destiny because on the second stop the weight is to high", () => {
        expect(canCarry(4, [[2, 5, 8], [3, 6, 10]])).toBeFalsy();
    });
    test('Equal but not higher than capacity', () => {
        expect(canCarry(3, [[1, 1, 5], [2, 2, 10]])).toBeTruthy();
    });
    test("We just deliver enough packages in the stop where the capacity after picking up its would be too much.", () => {
        expect(canCarry(3, [[2, 1, 5], [3, 5, 7]])).toBeTruthy();
    });
    test("It never passes the limits", () => {
        expect(canCarry(4, [[2, 3, 8], [2, 5, 7]])).toBeTruthy();
    });
    test("We cannot pass form the first stop", () => {
        expect(canCarry(1, [[2, 3, 8]])).toBeFalsy();
    });
    test("We cannot finish our trip on the last stop", () => {
        expect(canCarry(2, [[1, 2, 4], [2, 3, 8]])).toBeFalsy();
    });
})