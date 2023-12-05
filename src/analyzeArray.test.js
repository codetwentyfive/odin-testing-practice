const {analyzeArray} =require('./analyzeArray');

describe('analyzeArray', () => {
    test('calculates average', () => {
        const result = analyzeArray.average([1, 8, 3, 4, 2, 6]);
        expect(result).toBe(4);
    });

    test('calculates min', () => {
        const result = analyzeArray.min([1, 8, 3, 4, 2, 6]);
        expect(result).toBe(1);
    });

    test('calculates max', () => {
        const result = analyzeArray.max([1, 8, 3, 4, 2, 6]);
        expect(result).toBe(8);
    });

    test('calculates length', () => {
        const result = analyzeArray.length([1, 8, 3, 4, 2, 6]);
        expect(result).toBe(6);
    });

    test('throws error for empty array', () => {
        expect(() => analyzeArray.average([])).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray.min([])).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray.max([])).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray.length([])).toThrow("Input must be a non-empty array of numbers");
    });

    test('throws error for non-array input', () => {
        expect(() => analyzeArray.average('not an array')).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray.min('not an array')).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray.max('not an array')).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray.length('not an array')).toThrow("Input must be a non-empty array of numbers");
    });
});
