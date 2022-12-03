import decodeNumber from '../exercices/day16'

describe('Day 16 challenge', () => {
    test('Same symbol 3 times', () => {
        expect(decodeNumber('...')).toEqual(3);
    });
    test('Two symbols => subtraction', () => {
        expect(decodeNumber('.,')).toEqual(4);
    });
    test('Two symbols => NO subtraction', () => {
        expect(decodeNumber(',.')).toEqual(6);
    });
    test('4 Symbols', () => {
        expect(decodeNumber(',...')).toEqual(8);
    });
    test('A lot of the same symbol and a higher symbol at the end', () => {
        expect(decodeNumber('.........!')).toEqual(107);
    });
    test('Two symbol: lower and much higher => subtraction', () => {
        expect(decodeNumber('.;')).toEqual(49);
    });
    test('Thee symbols', () => {
        expect(decodeNumber('..,')).toEqual(5);
    });
    test('A bit of everything but repeating', () => {
        expect(decodeNumber('..,!')).toEqual(95);
    });
    test('A bit of everything without repeating', () => {
        expect(decodeNumber('.;!')).toEqual(49);
    });
    test('Same symbol 3 times with high value', () => {
        expect(decodeNumber('!!!')).toEqual(300);
    });
    test('Different small symbols form a higher value with a the resulting value of a higher symbol', () => {
        expect(decodeNumber(';!')).toEqual(50);
    });
    test('Unknown symbol at the end of the string', () => {
        expect(decodeNumber(';.W')).toEqual(NaN);
    });
})