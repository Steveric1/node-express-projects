
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while(i < 3);
// 
// console.log(i);


// while (i < 3) console.log(i);
// for (let i = 1; i <= 3; i++) console.log(i);

for (let i = 0; i < 10; i++) {
    // if (i % 2 == 0) continue;
    if (i > 8) continue;
    // console.log(i);
}

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}

// showPrimes(10);

//breaking the function
function showPrimes2(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

showPrimes2(10);