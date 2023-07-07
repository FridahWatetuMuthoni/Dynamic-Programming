"""
Problem:
Find the sum of the first n numbers ?
so we need to find the sum of the numbers from 1 to n
e.g.
1 + 2 + 3 + 4 + 5 .......+ n

Objective Function:
    f(1) = 1  is the sum of the first element

Recurence relation:
    f(n) = f(n - 1) + n

f(1) = 1
f(2) = f(1) + 2 = 1 + 2 =3
f(3)= f(2) + 3 = 3 + 3 = 6
f(4) = f(3) + 4 = 6 + 4 = 10
therefore the general formula is:
f(n) = f(n - 1) + n
f(n - 1)  = sum of the previous elements
n = the current element
"""


def sum_of_n(n):
    sum = 0
    for i in range(1, n+1):
        sum += i
    return sum


# print(sum_of_n(4))

def sum_of_n_recursion(n, sum=0):
    if (n == 0):
        return sum
    return sum_of_n_recursion(n - 1, sum=sum + n)


print(sum_of_n_recursion(4))
