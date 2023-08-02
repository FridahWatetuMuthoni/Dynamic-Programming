/* 
Write a function, connected_components_count, that takes in the adjacency list
of an undirected graph and returns its number of connected components.
*/

const graph = {
    0:[8, 1, 5],
    1:[0],
    5:[0,8],
    8:[0, 5],
    2:[3, 4],
    3:[2, 4],
    4:[3, 2],
} //two connected components

function connected_components_count(graph){
    const visited = new Set();
    let count = 0;

    for(let node in graph){
        console.log(visited)
        if(explore(graph, node, visited)){
            count += 1;
        }
    }
    return count;
}

function explore(graph,current,visited){
    if(visited.has(String(current))){
        return false
    }

    visited.add(String(current))

    for(let neigbour of graph[current]){
        explore(graph, neigbour,visited)
    }
    return true
}

console.log(connected_components_count(graph))