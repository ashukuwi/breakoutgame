
var factorFinder = function(number) {

    var factors = [];
    var half = number/2

    for (i=1;i<=half;i++) {
        var remainder = number % i;
        if (remainder == 0) {
            factors.push(i);
        }
    }
    return factors;
};
var factors=factorFinder(5);
console.log(factors);