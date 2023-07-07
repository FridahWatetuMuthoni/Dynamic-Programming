from functools import lru_cache
# LRU cache => least recently used cahe
# it used to add memoization to your functions


@lru_cache(maxsize=1000)
def fibonacci(n):
    # check if the input is a postive integer
    if type(n) != int:
        raise TypeError("The input must be a positive integer")
    if (n < 1):
        raise ValueError("Input must be a positive integer")
    if (n == 1):
        return 1
    elif (n == 2):
        return 1
    elif (n > 2):
        return fibonacci(n - 1) + fibonacci(n - 2)


for n in range(1, 501):
    print(f"{n}: {fibonacci(n)}")
