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

        /**
         * Sorting using a radix search
         * 
         * Start with the ones digit and sort 
         * Continue to sort for each order of magnitude until the input is sorted
         */
        radix = function (input) {

            if (input.length === 0) return [];

            // create a new array containing padded strings representing
            // the original input
            var paddedInput = padAllLeft(input),
                hash = [],

                // what is the index of the right most unit
                rightIndex = paddedInput[0].length - 1,

                assignToHash = function (val) {

                    var unit = val[rightIndex];

                    if (!hash[unit]) {
                        hash[unit] = [];
                    }
                    hash[unit].push(val);
                };

            while (rightIndex > -1) {

                paddedInput.forEach(assignToHash);
                paddedInput = flatten(hash);
                hash = [];
                rightIndex--;
            }

            // convert the string representation of the numbers
            // back to a number type
            return paddedInput.map(function (number) {
                return parseInt(number, 10);
            });
        },

        /**
         * Finds the maximum number in an array of numbers
         */
        findMax = function (input) {
            return Math.max.apply(Math, input);
        },

        /**
         * Swaps two elements at two given position in an array and
         * returns the affected array
         */
        swap = function (arr, first, second) {
            var temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
            return arr;
        },

        /**
         * Converts a number to a string then pads left using zeros
         * up to the given totalChars length
         */
        padLeft = function (number, totalChars) {
            var numberString = number.toString();
            return Array(totalChars - numberString.length + 1).join('0') + numberString;
        },

        /**
         * Takes an input array of integers creates a new array of left padded strings
         * dependant on the size of the largest value
         */
        padAllLeft = function (input) {

            // what is the max length of the largest number (e.g. 1000 is 4)
            var length = findMax(input).toString().length;

            // return a new array containing padded items
            return input.map(function (number) {
                return padLeft(number, length);
            });
        },

        /**
         * Flattens an array
         * e.g. [1, [2, [3, 4]]] => [1, 2, 3, 4]
         */
        flatten = function flatten (arr) {

            var coll = [];
            arr.forEach(function (item) {

                if (isArray(item)) {
                    coll = coll.concat(flatten(item));
                } else {
                    coll.push(item);
                }
            });
            return coll;
        },

        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === '[object Array]';
        };

    return {
        sortBy: {
            selection: selection,
            insertion: insertion,
            bubble: bubble,
            radix: radix
        },
        findMax: findMax,
        flatten: flatten,
        swap: swap,
        padLeft: padLeft,
        padAllLeft: padAllLeft
    };

}());
