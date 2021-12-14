import listGifts from '../src/day02'

describe('Day 2 challenge', () => {
    test('Group and filter gifts letter', () => {
        const letter = 'bici coche balón _playstation bici coche peluche';

        expect(listGifts(letter)).toEqual({
            bici: 2,
            coche: 2,
            balón: 1,
            peluche: 1
        })
    })
})