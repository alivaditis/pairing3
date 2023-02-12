var numbers = [2, 17, 25, 32, 45, 52, 69, 72];

console.log(numbers.filter(number => number > 30));

function isSmallEnough(value) {
    return value < 60;
}

var filter2 = numbers.filter(isSmallEnough);

console.log(filter2);