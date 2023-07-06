# Dynamic-Programming

## Dynamic Programming Process

Dynamic programming is the process of breaking a problem down into small problems that are easily solveable.
Dynamic programming can be used to solve many problems in polynomial time for which a naive approach would take exponential time.
Therefore dynamic programming is a method that allows us to solve problems that have certain properties
such as optimal substructure, overlapping subproblems or recurrence relation with closed form expression for each state

polynomial time complexity:
O(n<super>c</super>) where c is a contant value
example of a polynomial time complexity is O(n<super>2</super> and O(n<super>3</super>))

exponential time complexity:
O(c<super>n</super>) where c is a constant
example of a polynomial time complexity is O(2<super>n</super>)

problem -> dynamic programming blackbox -> solution

Dynamic programming is an optimization technique

## Charateristics and properties that make a problem solveable using dynamic programming

1. Optimal Substructure
   A problem has Optimal Substructure property when its optimal solution can be constructed from the optimal
   solutions of its sub problems.
   So by solving each sub problem in its most optimal way we obtain optimal solution to the whole problem

2. Overlapping Subproblems
   When we a break a problem to many sub problems you will notice that sometimes you need to recalculate
   some work multiple times eg fibonacci
   If there exist duplicate computations, then it means our approach will not work efficiently. e.g. redundant series, matrix multiplication etc.. so this makes our algorithm very slow as it needs to repeat same calculations
