const TnTests = require('../JS/TN/sharedTN.js');

describe("Total", () => {
    test('Get total', () => {
        const obj = {num1: 4, num2: 2};
        expect(TnTests.getTotalData(obj)).toStrictEqual({total: 36});
    });
});

describe("Tax", () => {
    test('Get tax', () => {
        const obj = {num1: 4, num2: 2};
        expect(TnTests.getTaxData(obj)).toStrictEqual({tax: 66});
    });
});