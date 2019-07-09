function isStartSmallerThanOrEqualToEnd (start, end) {
    return start <= end;
}

function isNumbersInRangeOf1To1000 (start, end) {
    return (start >= 1 && start <= 1000 && end >= 1 && end <= 1000);
}

function createMultiplicationTable (start, end) {
    if (isStartSmallerThanOrEqualToEnd(start, end) && isNumbersInRangeOf1To1000(start, end)) {
        let result = '';
        for (let i = start; i <= end; i++) {
            for (let j = start; j <= i; j++ ) {
                result += i + '*' + j + '=' + i * j + '  ';
            }
            result += '\n';
        }
        return result;
    } else {
        return null;
    }

}

module.exports = {
    isStartSmallerThanOrEqualToEnd,
    isNumbersInRangeOf1To1000,
    createMultiplicationTable
};