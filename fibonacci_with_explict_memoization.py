# stores recent function calls
fibonacci_cache = {}


def fibonacci(n):
    # check if the input is an integer
    if type(n) != int:
        raise TypeError("The input must be a positive integer")

    # check if the input is a postive integer
    if (n < 1):
        raise ValueError("Input must be a positive integer")

    # if we have a cached the value, then return if
    if n in fibonacci_cache:
        return fibonacci_cache[n]

    # compute the nth term
    if (n == 1):
        value = 1
    elif (n == 2):
        value = 1
    elif (n > 2):
        value = fibonacci(n - 1) + fibonacci(n - 2)

    # cache the value and return it
    fibonacci_cache[n] = value
    return value


for n in range(1, 101):
    print(f"{n}: {fibonacci(n)}")
