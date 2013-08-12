/*global ST*/

module('Sorting algorithms', {
    setup: function () {
        this.testAscendingIntegers = function (algorithm) {
            var unsorted = [4, 3, 1, 2, 5],
                expected = [1, 2, 3, 4, 5];

            deepEqual(
                ST.sortBy[algorithm](unsorted),
                expected,
                'the array of integers is sorted in ascending order'
            );
        },
        this.testIndeticalIntegers = function (algorithm) {
            var unsorted = [4, 4, 4, 4, 4],
                expected = [4, 4, 4, 4, 4];

            deepEqual(
                ST.sortBy[algorithm](unsorted),
                expected,
                'the method handles arrays of identical values'
            );
        },
        this.testSingleIntegers = function (algorithm) {
            var unsorted = [1],
                expected = [1];

            deepEqual(
                ST.sortBy[algorithm](unsorted),
                expected,
                'the method handles arrays with single values'
            );
        },
        this.testNegativeIntegers = function (algorithm) {
            var unsorted = [1, 2, 1, 1, 2, 2, 0, 0, -1, -2, -2],
                expected = [-2, -2, -1, 0, 0, 1, 1, 1, 2, 2, 2];

                deepEqual(
                    ST.sortBy[algorithm](unsorted),
                    expected,
                    'the method handles negative values'
                );
            };
    },
    tearDown: function () {
        delete this.testAscendingIntegers;
        delete this.testIndeticalIntegers;
        delete this.testSingleIntegers;
        delete this.testNegativeIntegers;
    }
});

test('ST.sortBy.selection sorts an array of integers using the selection algorithm', function () {

    var algorithm = 'selection';
    this.testAscendingIntegers(algorithm);
    this.testIndeticalIntegers(algorithm);
    this.testSingleIntegers(algorithm);
    this.testNegativeIntegers(algorithm);
});

test('ST.sortBy.insertion sorts an array of integers using the insertion algorithm', function () {

    var algorithm = 'insertion';
    this.testAscendingIntegers(algorithm);
    this.testIndeticalIntegers(algorithm);
    this.testSingleIntegers(algorithm);
    this.testNegativeIntegers(algorithm);
});

test('ST.sortBy.bubble sorts an array of integers using the bubble sort algorithm', function () {

    var algorithm = 'bubble';
    this.testAscendingIntegers(algorithm);
    this.testIndeticalIntegers(algorithm);
    this.testSingleIntegers(algorithm);
    this.testNegativeIntegers(algorithm);
});

test('ST.findMax returns the expected highest number from an array', function () {

    strictEqual(2, ST.findMax([1, 2]),
        'finds the expected value in small array'
    );

    strictEqual(2, ST.findMax([2]),
        'finds the expected value in single item array'
    );

    strictEqual(20, ST.findMax([1, 2, 3, 20]),
        'finds the expected value in multi item array'
    );

    strictEqual(3, ST.findMax([1, -2, 3, -20]),
        'deals with negative and positive numbers'
    );

    strictEqual(-1, ST.findMax([-1, -2, -3, -20]),
        'deals with negative numbers'
    );
});

test('ST.swap returns the array with two items swapped', function () {

    var preSwap = [1, 2],
        expected = [2, 1];

    deepEqual(expected, ST.swap(preSwap, 0, 1),
        'swaps the two items at positions 0 and 1'
    );

    preSwap = [1, 2, 3, 4],
    expected = [4, 2, 3, 1];

    deepEqual(expected, ST.swap(preSwap, 0, 3),
        'swaps the two items at the extremes'
    );

    preSwap = [3, 3, 3],
    expected = [3, 3, 3];

    deepEqual(expected, ST.swap(preSwap, 0, 1),
        'handles identical values'
    );
});

test('ST.padLeft', function () {

    strictEqual('1', ST.padLeft(1, 1),
        'does not add padding if the number is the total required length'
    );

    strictEqual('01', ST.padLeft(1, 2),
        'pads a one digit number to two characters'
    );

    strictEqual('0000000001', ST.padLeft(1, 10),
        'pads a one digit number to ten characters'
    );

    strictEqual('0000000021', ST.padLeft(21, 10),
        'pads a two digit number to ten characters'
    );

    strictEqual('0000000321', ST.padLeft(321, 10),
        'pads a three digit number to ten characters'
    );

    strictEqual('0300000321', ST.padLeft(300000321, 10),
        'pads a nine digit number to ten characters'
    );
});

test('ST.padAllLeft', function () {

    deepEqual(['1', '2', '3'], ST.padAllLeft([1, 2, 3]),
        'pads a complete array of single digit numbers');

    deepEqual(['01', '02', '30'], ST.padAllLeft([1, 2, 30]),
        'pads an array including two digit number numbers');

    deepEqual(['00001', '00002', '00030', '00400', '05000', '60000'],
        ST.padAllLeft([1, 2, 30, 400, 5000, 60000]),
        'pads an array including mixed digit number numbers');
});
