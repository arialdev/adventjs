import fixFiles from '../src/day18'

describe('Day 18 challenge', () => {
    test('Items without parenthesis but with repetitions', () => {
        const files = ['photo', 'postcard', 'photo', 'photo', 'video']
        expect(fixFiles(files)).toEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']);
    });
    test('Items without parenthesis but with multiple repetitions', () => {
        const files2 = ['file', 'file', 'file', 'game', 'game']
        expect(fixFiles(files2)).toEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)']);
    });
    test('Items with parenthesis but with multiple repetitions', () => {
        const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
        expect(fixFiles(files3)).toEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']);
    });
})