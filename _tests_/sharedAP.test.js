const getTotalData = require('../JS/AP/sharedAP.js');

test("Sanity check", () => {
    expect(true).toBe(true);
});

test('Get total', () => {
    const obj = {num1: 4, num2: 2};
    expect(getTotalData(obj)).toStrictEqual({total: 26});
  });