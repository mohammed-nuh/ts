var isPrime = function (num) {
    var prime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    prime == true ? console.log('Prime') : console.log('Composite');
};
isPrime(6);
