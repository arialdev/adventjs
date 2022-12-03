import canReconfigure from '../exercices/day23'

describe('Day 23 challenge', () => {
    test('Correct translation even having most of the characters on both parameters ', () => {
        expect(canReconfigure('BAL', 'LIB')).toBeTruthy();
    });
    test("Repeated destiny character for different origin's characters", () => {
        expect(canReconfigure('CON', 'JUU')).toBeFalsy();
    });
    test("Origin presents the same character for 3 different destiny's characters", () => {
        expect(canReconfigure('MMM', 'MID')).toBeFalsy();
    });
    test("Different lengths although there is no controversial character", () => {
        expect(canReconfigure('AA', 'MID')).toBeFalsy();
    });
})