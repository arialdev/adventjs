import createXmasTree from '../src/day04'

describe('Day 4 challenge', () => {
    test('Create tree height 5', () => {
        expect(createXmasTree(5)).toEqual('____*____\n' +
            '___***___\n' +
            '__*****__\n' +
            '_*******_\n' +
            '*********\n' +
            '____#____\n' +
            '____#____')
    });
    test('Create tree height 3', () => {
        expect(createXmasTree(3)).toEqual('__*__\n' +
            '_***_\n' +
            '*****\n' +
            '__#__\n' +
            '__#__')
    });
})