const { calculator } = require('./calculator');

test('add', () => {
    const result = calculator.add(2, 6);
    expect(result).toBe(8)
})

test('substract', () => {
    const result = calculator.substract(8, 2);
    expect(result).toBe(6)
})

test('multiply', () => {
    const result = calculator.multiply(8, 2);
    expect(result).toBe(16)
})

test('divide', () => {
    const result = calculator.divide(8, 2);
    expect(result).toBe(4)
})

test('divide by ZERO', ()=> {
    expect(()=> calculator.divide(10,0)).toThrow("Can't divide by ZERO")
})


