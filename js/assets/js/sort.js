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

            var outer = 0,
                inner = 0,
                length = input.length,
                end = length - 1,
                lowestIndex,
                lowest;

            for (outer; outer < end; outer += 1) {

                inner  = outer + 1;
                lowestIndex = false;
                lowest = input[outer];
                
                for (inner; inner < length; inner += 1) {

                    if (input[inner] < lowest) {
                        lowestIndex = inner;
                        lowest = input[lowestIndex];
                    }
                }

                if (lowestIndex !== false) {
                    input = swap(input, outer, lowestIndex);
                }
            }
            return input;
        },
        swap = function (arr, first, second) {
            var temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
            return arr;
        };

    return {
        selection: selection
    };

}());
