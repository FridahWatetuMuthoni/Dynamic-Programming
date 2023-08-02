/*
write a function the largest_component, that takes in an adjacency list
of an undeirected graph.The function should return the size of the largest
connected component in the graph
*/

const graph = {
    0:[8, 1, 5],
    1:[0],
    5:[0,8],
    8:[0, 5],
    2:[3, 4],
    3:[2, 4],
    4:[3, 2],
} //4

function largest_component(graph){
    let visited = new Set();
    let largest = 0;
    for(let node in graph){
        const size = explore(graph,node,visited)
        if(size > largest){
            largest = size
        }
    }
    return largest;
}

function explore(graph,current,visited){
    if(visited.has(current)){
        return 0
    }

    visited.add(current)
    let size = 1; //counting the current node
    for(let neighbour of graph[current]){
        size += explore(graph, neighbour, visited)
    }
    return size
}

console.log(largest_component(graph))