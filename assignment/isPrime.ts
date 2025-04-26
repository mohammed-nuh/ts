let isPrime = num => {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    prime == true ? console.log('Prime') : console.log('Composite');
}

isPrime(6); 