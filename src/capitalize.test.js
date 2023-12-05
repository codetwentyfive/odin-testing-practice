const {capitalize} =require('./capitalize');

test('capitalize first letter', () => {
    const result =capitalize("test");

    expect(result).toBe('Test');
});

