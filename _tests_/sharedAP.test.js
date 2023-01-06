const apTests = require('../JS/AP/sharedAP.js');

describe("Sample test case", () => {
    test("Sanity check", () => {
        expect(true).toBe(true);
    });
});

describe("Total", () => {
    test('Get total', () => {
        const obj = {num1: 4, num2: 2};
        expect(apTests.getTotalData(obj)).toStrictEqual({total: 26});
    });
});

describe("Tax", () => {
    test('Get tax', () => {
        const obj = {num1: 4, num2: 2};
        expect(apTests.getTaxData(obj)).toStrictEqual({tax: 56});
    });
});