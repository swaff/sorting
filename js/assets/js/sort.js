var ST = (function () {

    /**
     * Sorting using the selection algorith
     * 1.   Start with the entire list marked as unprocessed.
     * 2.   Find the smallest element in the yet unprocessed list;
     *      swap it with the element that is in the first position of the unprocessed list;
     *      reset the unprocessed list starting with the second element.
     * 3.   Repeat step 2 for an additional n – 2 times for the remaining n – 1
     *      numbers in the list. After n – 1 iterations, the nth element, by is the
     *      largest and is in the correct location.
     */
    var selection = function (input) {

            var i = 0,
                end = input.length - 1,
                sorted = [];

            for (i; i < end; i += 1) {

                // get the smallest number in the array and add
                // to the first postion of the sorted array
                sorted.push(input.splice(getSmallestNumberIndexFromArray(input), 1)[0]);
            }

            // there is only the largest value left in the input array, add to the
            // sorted array
            sorted.push(input[0]);
            return sorted;
        },
        getSmallestNumberIndexFromArray = function (input) {
            var smallest,
                smallestIndex;

            input.forEach(function (value, index) {
                if (index === 0 || value < smallest) {
                    smallest = value;
                    smallestIndex = index;
                }
            });
            return smallestIndex;
        };


    return {
        selection: selection
    };

}());
