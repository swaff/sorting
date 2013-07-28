/*global ST*/

module('Sorting algorithms', {
    setup: function () {
        this.testAscendingIntegers = function (algorithm) {
            var unsorted = [4, 3, 1, 2, 5],
                expected = [1, 2, 3, 4, 5];

            deepEqual(
                ST[algorithm](unsorted),
                expected,
                'the array of integers is sorted in ascending order'
            );
        },
        this.testIndeticalIntegers = function (algorithm) {
            var unsorted = [4, 4, 4, 4, 4],
                expected = [4, 4, 4, 4, 4];

            deepEqual(
                ST[algorithm](unsorted),
                expected,
                'the method handles arrays of identical values'
            );
        },
        this.testSingleIntegers = function (algorithm) {
            var unsorted = [1],
                expected = [1];

            deepEqual(
                ST[algorithm](unsorted),
                expected,
                'the method handles arrays with single values'
            );
        },
        this.testNegativeIntegers = function (algorithm) {
            var unsorted = [1, 2, 1, 1, 2, 2, 0, 0, -1, -2, -2],
                expected = [-2, -2, -1, 0, 0, 1, 1, 1, 2, 2, 2];

                deepEqual(
                    ST[algorithm](unsorted),
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


test('sorts an array of integers using the selection algorithm', function () {

    var algorithm = 'selection';
    this.testAscendingIntegers(algorithm);
    this.testIndeticalIntegers(algorithm);
    this.testSingleIntegers(algorithm);
    this.testNegativeIntegers(algorithm);
});

test('sorts an array of integers using the insertion algorithm', function () {

    var algorithm = 'insertion';
    this.testAscendingIntegers(algorithm);
    this.testIndeticalIntegers(algorithm);
    this.testSingleIntegers(algorithm);
    this.testNegativeIntegers(algorithm);
});

test('sorts an array of integers using the bubble sort algorithm', function () {

    var algorithm = 'bubble';
    this.testAscendingIntegers(algorithm);
    this.testIndeticalIntegers(algorithm);
    this.testSingleIntegers(algorithm);
    this.testNegativeIntegers(algorithm);
});