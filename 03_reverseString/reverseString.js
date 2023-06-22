const reverseString = function(string) {
    let stringArray = [];
    let position = 0
    for (let i = string.length; i>=0; i--) {
        stringArray[position] = string.charAt(i);
        position++;
    }
    return stringArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
