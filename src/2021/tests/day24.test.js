import checkIsSameTree from '../exercices/day24'

describe('Day 24 challenge', () => {
    const tree = {
        value: 1,
        left: { value: 2, left: null, right: null },
        right: { value: 3, left: null, right: null }
    }
    test('Same object in parameters', () => {
        expect(checkIsSameTree(tree, tree)).toBeTruthy();
    });

    const tree2 = {
        value: 1,
        left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
        right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }
    test("Different trees (same root but different children)", () => {
        expect(checkIsSameTree(tree, tree2)).toBeFalsy();
    });
    test("Same object in parameters", () => {
        expect(checkIsSameTree(tree2, tree2)).toBeTruthy();
    });
})