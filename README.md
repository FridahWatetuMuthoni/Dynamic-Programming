# Dynamic-Programming

## Dynamic Programming Process

Dynamic programming is an algorithmic technique to solve combinatorial and optimatization problems utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its overlapping sub problems.
Dynamic programming can be used to solve many problems in polynomial time for which a naive approach would take exponential time.
Therefore dynamic programming is a method that allows us to solve problems that have certain properties
such as optimal substructure, overlapping subproblems or recurrence relation with closed form expression for each state

1. Polynomial time complexity:
O(n<sup>c</sup>) where c is a contant value.
Some examples of the polynomial time complexity are O(n<sup>2</sup> and O(n<sup>3</sup>))

2. Exponential time complexity:
O(c<sup>n</sup>) where c is a constant.
An example of a polynomial time complexity is O(2<sup>n</sup>)

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

## The Different types of Dynamic Problems

1. optimization problems
In optimization problems we are interested in finding a strategy which maximizes or minimizes some function.
In optimation problems we are not interested in the number of steps but the minimum number of steps.
An example of a optimization problem is:
What is the minimum number of steps needed to get from point A to point B?
What is the maximum profit gained by buying and selling a stock?
What is the minimum cost to travel from New York to Mumbai?

2. combinatoric problems
The combinatoric problems answer the question how many?
e.g.
How many ways to make a change?
How many ways to traverse a graph?
How many steps needed to get from point A to point B?
So basically combinatoric problems involve counting something
