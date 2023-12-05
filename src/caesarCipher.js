function caesarCipher(str, shift) {
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

function shiftChar(char, shift) {
    const isUpperCase = /[A-Z]/.test(char);
    const isLowerCase = /[a-z]/.test(char);

    if (isUpperCase || isLowerCase) {
        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode((char.charCodeAt(0) - base + shift + 26) % 26 + base);
    }

    return char;
}

module.exports = { caesarCipher };
