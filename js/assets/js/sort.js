var ST = (function () {

    /**
     * Sorting using the selection algorithm
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

        /**
         * Sorting using the insertion algorithm
         *
         * Step 1: Consider only the first element, and thus, our list is sorted.
         * Step 2: Consider the next element; insert that element into the proper position in the already-sorted list.
         * Step 3: Repeat this process of adding one new number for all n numbers.
        */
        insertion = function (input) {

            input.forEach(function (item, index) {

                var inner = index,
                    found = false;

                while (inner > 0 && !found) {

                    // if the item is larger than it's neighbour at the lower
                    // position, swap the two values around
                    if (input[inner] < input[inner - 1]) {
                        input = swap(input, inner -1, inner);
                    } else {
                        found = true;
                    }
                   inner = inner - 1;  
                }
            });            
            return input;
        },

        /**
         * Sorting using the bubble sort algorithm
         *
         * Step 1: Loop through all entries of the list.
         * Step 2: Compare each entry to all successive entries and swap entries if they are out of order.
         * Step 3: Repeat this process a total of n – 1 times.
        */
        bubble = function (input) {

            var outer = 0, 
                outerLength = input.length,
                outerEnd = outerLength - 2,
                inner;

            for (outer; outer < outerEnd; outer += 1) {

                inner = outer + 1;

                for (inner; inner < outerLength; inner += 1) {
                    if (input[outer] > input[inner]) {
                        input = swap(input, inner, outer);
                    }
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
        selection: selection,
        insertion: insertion,
        bubble: bubble
    };

}());
