import countPackages from '../src/day17'

describe('Day 17 challenge', () => {
    test('Same symbol 3 times', () => {
        const carriers = [
            ['dapelu', 5, ['midu', 'jelowing']],
            ['midu', 2, []],
            ['jelowing', 2, []]
        ]
        expect(countPackages(carriers, 'dapelu')).toEqual(9);
    });
    test('Two symbols => subtraction', () => {
        const carriers = [
            ['lolivier', 8, ['camila', 'jesuspoleo']],
            ['camila', 5, ['sergiomartinez', 'conchaasensio']],
            ['jesuspoleo', 4, []],
            ['sergiomartinez', 4, []],
            ['conchaasensio', 3, ['facundocapua', 'faviola']],
            ['facundocapua', 2, []],
            ['faviola', 1, []]
        ]
        expect(countPackages(carriers, 'camila')).toEqual(15);
    });
})