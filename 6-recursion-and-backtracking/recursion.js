

// Try to implement recursion in every places where the solution can be achieved by loop

function simpleRecursion(count = 5) {

    if (count <= 0) {
        return
    }
    simpleRecursion(--count)
    console.log("I Love You", count)
}

// simpleRecursion(5)


function printOdds(range) {

    if (range < 0) return;
    printOdds(range - 2)
    console.log(range)
}

// printOdds(10)


function sumOfN(n) {
    if (n <= 0) return 0
    return n + sumOfN(n - 1)
}

// console.log(sumOfN(26))



function sumOfRange(start, end) {

    if (start > end) {
        return 0
    }
    return start + sumOfRange(start + 1, end)
}

// console.log(sumOfRange(1,5))



function sumOfArray(arr) {

    if (arr.length === 0) return 0

    return arr[0] + sumOfArray(arr.slice(1))
}

// console.log(sumOfArray([1, 4, 5,]))



function printDigits(n) {
    if (n < 10) {
        console.log(n);
        return;
    }
    printDigits(Math.floor(n / 10));
    console.log(n % 10);
}


// printDigits(1234)


function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}
console.log(factorial(4))