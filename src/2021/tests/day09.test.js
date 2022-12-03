import groupBy from '../exercices/day09'

describe('Day 9 challenge', () => {
    test('Applying function', () => {
        expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 6: [6.1, 6.3], 4: [4.2] });
    });
    test("Applying prototype's function", () => {
        expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], 5: ['three'] });
    });
    test("Grouping by object's property to only-one-value objects", () => {
        expect(groupBy([{ age: 23 }, { age: 24 }], 'age')).toEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] });
    });
    test("Applying arrow function", () => {
        expect(groupBy(
            [1397639141184, 1363223700000],
            timestamp => new Date(timestamp).getFullYear()
        )).toEqual({ 2013: [1363223700000], 2014: [1397639141184] });
    });
    test("Grouping by object's property to objects with multiple properties", () => {
        expect(groupBy([
            { title: 'JavaScript: The Good Parts', rating: 8 },
            { title: 'Aprendiendo Git', rating: 10 },
            { title: 'Clean Code', rating: 9 },
        ], 'rating')).toEqual({
            8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
            9: [{ title: 'Clean Code', rating: 9 }],
            10: [{ title: 'Aprendiendo Git', rating: 10 }]
        });
    });
})