const Main = require('../main');

const isStartSmallerThanOrEqualToEnd = Main.isStartSmallerThanOrEqualToEnd;

const isNumbersInRangeOf1To1000 = Main.isNumbersInRangeOf1To1000

const createMultiplicationTable = Main.createMultiplicationTable;

// test for function isStartSmallerThanOrEqualToEnd

it ('should return true when start number smaller than end number given 2 and 4', () => {
    expect(isStartSmallerThanOrEqualToEnd(2, 4)).toBe(true);
});

it ('should return true when start number equals end number given 2 and 2', () => {
    expect(isStartSmallerThanOrEqualToEnd(2, 2)).toBe(true);
});

it ('should return false when start number bigger than end number given 4 and 1', () => {
    expect(isStartSmallerThanOrEqualToEnd(4, 1)).toBe(false);
});

// test for function isNumbersInRangeOf1To1000

it ('should return true when start number and end number are both in range of 1 and 10000 given 2 and 4', () => {
    expect(isNumbersInRangeOf1To1000(2, 4)).toBe(true);
});

it ('should return false when start number and end number one out of range from 1 to 10000 given 3 and 1005', () => {
    expect(isNumbersInRangeOf1To1000(3, 1005)).toBe(false);
});

it ('should return false when start number and end number one is the range 1 and 10000 given 3 and 1000', () => {
    expect(isNumbersInRangeOf1To1000(3, 1000)).toBe(true);
});

// test for createMultiplicationTable
it ('should return null when start number bigger than end number given 5 and 3', () => {
    expect(createMultiplicationTable(5, 3)).toBe(null);
});

it ('should return null when start number and end number one out of range from 1 to 1000 given 4 and 1001', () => {
    expect(createMultiplicationTable(4, 1001)).toBe(null);
});

it ('should return multiplication table when start number and end number given 2 and 4', () => {
    let result = '2*2=4  \n' +
        '3*2=6  3*3=9  \n' +
        '4*2=8  4*3=12  4*4=16  \n';
    expect(createMultiplicationTable(2, 4)).toBe(result);
});
