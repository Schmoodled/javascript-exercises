//create a summation function between two given arguments
const sumAll = function(min, max) {
    let total = 0;
    //in the case the first value is larger
    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    //error for negative numbers
    if (min < 0 || max < 0) return "ERROR";

    //error for non-numbers
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    for (let i =min; i<max; i++) {
        total += i;
    }
    total = total + max;
    return total;
};

// Do not edit below this line
module.exports = sumAll;
