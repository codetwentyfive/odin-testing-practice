const { caesarCipher } = require('./caesarCipher');

test('caesarCipher basic test', () => {
    const result = caesarCipher("Hello, World!", 3);
    expect(result).toBe("Khoor, Zruog!");
});

test('caesarCipher wrap from z to a', () => {
    const result = caesarCipher("xyz", 5);
    expect(result).toBe("cde");
});

test('caesarCipher keep the same case', () => {
    const result = caesarCipher("AbCdEf", 1);
    expect(result).toBe("BcDeFg");
});

test('caesarCipher with punctuation', () => {
    const result = caesarCipher("Hello, World!", 10);
    expect(result).toBe("Rovvy, Gybvn!");
});

test('caesarCipher with negative shift factor', () => {
    const result = caesarCipher("abcd", -1);
    expect(result).toBe("zabc");
});