const { add, sub, calculateTip } = require('../src/math');

test('Should add two numbers', () => {
    const result = add(5, 7);

    // if (result !== 12)
    //   throw new Error(`Expected: 12; Got ${result}.`);

    expect(result).toBe(12);
})

test('Should calculate total with tip', () => {
  const total = calculateTip(10, .3);

  expect(total).toBe(13);
})
