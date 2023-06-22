const repeatString = function(string, num) {
    let stringRepeated = '';

    if (num<0) {
        stringRepeated = 'ERROR';
    }

    for (let i = 0; i < num; i++) {
       stringRepeated = stringRepeated + string; 
    }
    return stringRepeated;
}

// Do not edit below this line
module.exports = repeatString;
