/*global ST*/

module('ST.selection');


test('exists', function () {

    ok(ST !== undefined, 'the ST namespace exists');
    ok(ST.selection !== undefined, 'there is a property of ST called selection');
});

test('sorts an array of integers using the selection algorithm', function () {

    var unsorted = [4, 3, 1, 2, 5],
        expected = [1, 2, 3, 4, 5];

    deepEqual(
        ST.selection(unsorted),
        expected,
        'the array of integers is sorted in ascending order'
    );

    unsorted = [4, 4, 4, 4, 4];
    expected = [4, 4, 4, 4, 4];

    deepEqual(
        ST.selection(unsorted),
        expected,
        'the method handles arrays of identical values'
    );

    unsorted = [1];
    expected = [1];

    deepEqual(
        ST.selection(unsorted),
        expected,
        'the method handles arrays with single values'
    );

    unsorted = [1, 2, 1, 1, 2, 2, 0, 0, -1, -2, -2];
    expected = [-2, -2, -1, 0, 0, 1, 1, 1, 2, 2, 2];

    deepEqual(
        ST.selection(unsorted),
        expected,
        'the method handles negative values'
    );

});
