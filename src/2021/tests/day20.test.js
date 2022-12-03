import pangram from '../exercices/day20'

describe('Day 20 challenge', () => {
    test("Sentence with the whole alphabet, with accents and 'ñ'", () => {
        expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBeTruthy();
    });
    test('Sentence with the whole alphabet and other characters', () => {
        expect(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')).toBeTruthy();
    });
    test("Sentence without some letters, such as 'ñ'", () => {
        expect(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')).toBeFalsy();
    });
    test("Sentence with the lack of multiple letters", () => {
        expect(pangram('De la a a la z, nos faltan letras')).toBeFalsy();
    });
})