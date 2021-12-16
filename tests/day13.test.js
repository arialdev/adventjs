import wrapGifts from '../src/day13'

describe('Day 13 challenge', () => {
    test('Two single gifts', () => {
        expect(wrapGifts(["📷", "⚽️"])).toEqual(['****',
            '*📷*',
            '*⚽️*',
            '****'
        ]);
    });
    test('Two double gifts', () => {
        expect(wrapGifts(["🏈🎸", "🎮🧸"])).toEqual(['******',
            '*🏈🎸*',
            '*🎮🧸*',
            '******'
        ]);
    });
    test('One single gift', () => {
        expect(wrapGifts(["📷"])).toEqual(['****',
            '*📷*',
            '****'
        ]);
    });
})