// Write a boolean function to find a given number is prime

function isPrimeNumber(num) {
    let isPrime = true;
    let factorCount = 0;

    if (num == 0 || num == 1) {
        isPrime = false;

    } else {
        for (let a = 1; a <= num / 2; a++) {
            if (num % a == 0) {
                factorCount++;
            }
        }
    }

    if (factorCount != 1) {
        isPrime = false;
    }

    return isPrime;
}

function printMsg(a, isPrime) {
    if (isPrime) {
        console.log(a + " is a prime number.\n")
    }
    else {
        console.log(a + " is not a prime number.\n")
    }
}

printMsg(1, isPrimeNumber(1))
printMsg(2, isPrimeNumber(2))
printMsg(3, isPrimeNumber(3))
printMsg(4, isPrimeNumber(4))
printMsg(5, isPrimeNumber(5))
printMsg(6, isPrimeNumber(6))
printMsg(7, isPrimeNumber(7))