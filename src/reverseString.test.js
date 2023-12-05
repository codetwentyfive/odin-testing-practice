const { reverseString } = require('./reverseString');

test('reverseString', () => {
    const result = reverseString("hello");
    expect(result).toBe('olleh');
})

test('empty string', () => {
    const result = reverseString("");
    expect(result).toBe('');
});