import daysToXmas from '../src/day05'

describe('Check past dates', () => {
    test('First of same month same year', () => {
        expect(daysToXmas(new Date('Dec 1, 2021'))).toEqual(24)
    });
    test('Day before', () => {
        expect(daysToXmas(new Date('Dec 24, 2021 00:00:01'))).toEqual(1)
    });
    test('Second before', () => {
        expect(daysToXmas(new Date('Dec 24, 2021 23:59:59'))).toEqual(1)
    });
    test('Same month, same year previous day', () => {
        expect(daysToXmas(new Date("December 20, 2021 03:24:00"))).toEqual(5)
    });
});

describe('Check future dates', () => {
    test('The same day', () => {
        expect(daysToXmas(new Date('Dec 25, 2021'))).toEqual(0)
    });
    test('Next day', () => {
        expect(daysToXmas(new Date('Dec 26, 2021'))).toEqual(-1)
    });
    test('Las day of the same year', () => {
        expect(daysToXmas(new Date('Dec 31, 2021'))).toEqual(-6)
    });
    test('First second of the next year', () => {
        expect(daysToXmas(new Date('Jan 1, 2022 00:00:01'))).toEqual(-7)
    });
    test('Last second of the first day of the next year', () => {
        expect(daysToXmas(new Date('Jan 1, 2022 23:59:59'))).toEqual(-7)
    });
});