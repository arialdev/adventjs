import wrapGifts from '../src/day13'

describe('Day 13 challenge', () => {
    test('Unsorted obstacles: medium jump', () => {
        expect(wrapGifts(["📷", "⚽️"])).toEqual(['****',
            '*📷*',
            '*⚽️*',
            '****'
        ]);
    });
    test('Unsorted obstacles: big jump', () => {
        expect(wrapGifts(["🏈🎸", "🎮🧸"])).toEqual(['******',
            '*🏈🎸*',
            '*🎮🧸*',
            '******'
        ]);
    });
    test('Ascending sorted obstacles', () => {
        expect(wrapGifts(["📷"])).toEqual(['****',
            '*📷*',
            '****'
        ]);
    });
})