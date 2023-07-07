""" 
Problem:
Write a function to return the nth term of the fibonacci sequence
"""


def fibonacci(n):
    if (n == 1):
        return 1
    elif (n == 2):
        return 1
    elif (n > 2):
        # the sum of the two previous terms
        return fibonacci(n - 1) + fibonacci(n - 2)


for n in range(1, 11):
    print(n, ":", fibonacci(n))
