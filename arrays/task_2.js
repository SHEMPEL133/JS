var fizzBuzz = function (n) {
    var array = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz");
            continue;
        }
        if (i % 3 === 0) {
            array.push("Fizz");
            continue;
        } else if (i % 5 === 0) {
            array.push("Buzz");
            continue;
        } else {
            array.push(i.toString());
        }
    }
    return array;
};