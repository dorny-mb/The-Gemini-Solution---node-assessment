import { isMountainArr } from './is-mountain-array'

describe('is mountain array tests', () => {
    test('[3, 5, 5] returns false', () => {
        const nums = [3, 5, 5];
        const expected = false;
        expect(isMountainArr(nums)).toBe(expected);
    });

    test('[0, 3, 2, 1] returns true', () => {
        const nums = [0, 3, 2, 1];
        const expected = true;
        expect(isMountainArr(nums)).toBe(expected);
    });

    test('[0, 2, 3, 3, 5, 2, 1, 0] returns false', () => {
        const nums = [0, 2, 3, 3, 5, 2, 1, 0];
        const expected = false;
        expect(isMountainArr(nums)).toBe(expected);
    });
});