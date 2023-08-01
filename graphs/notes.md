# GRAPHS

## Graphs Introductions

A graph is a collection of nodes and edges. The nodes contain data and the edges connects those nodes.
Voltex == Node
A graph is a grid describing the relationship between things.
e.g. We can say the nodes are cities and the edges are the roads connecting this cities or the nodes are courses and the edges are prerequisites or a social netweork where the edges are where two nodes are friends or not.
Directed graphs are one ways street while undirected graphs are two ways street.
Neighbour nodes are any nodes that are accesible thru an edge as long as it obeys the direction of the edge.
Acyclic in a graph means that they are no cycles
if you did a traversal on a cyclic graph, you would get an infinte loop
G = (V, E)
Graph = (set of vertices, set of edges)

n = nodes
e = edges

runtime = O(n^2)
space complexity = O(n)

There are two types of graphs:

1. Directed Graphs
   This are graphs where the edges between nodes have direction.an
   example of a directed graph could be the internet and webpage links,
   where the nodes are the webpages and the edges are the links to other pages

2. Undirected Graphs
   This are graphs where the edges dont have any direction between nodes
   an example of an undirected graph is a social network, where the nodes
   are people and the egdes are friendships

## Depth First Traversal

Depth first traversal is exploring one direction as far as possible before stwitching directions
Depth first algorithm uses a stack
stack is basically a vertical data structure
stack is last in first out

## Breadth first traversal

Breadth first traversal explore all directions evenly, instead of favoring one direction all the way through
Breadth first travesal uses a queue
queue is first in first out
