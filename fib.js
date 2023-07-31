function fib(n, fib_cache = {}) {
    if (n in fib_cache) {
        return fib_cache[n]
    }
    let value;
    if (n === 1) {
        value = 1
    }
    if (n === 2) {
        value = 1
    }
    if (n > 2) {
        value = fib(n - 1, fib_cache) + fib(n - 2, fib_cache)
    }
    fib_cache[n] = value
    return value
}

console.log(fib(50))
