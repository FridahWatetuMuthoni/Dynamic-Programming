const depth_first_print = (graph, start_node) => {
    console.log(start_node)
    for (let neigbour of graph[start_node]) {
        depth_first_print(graph, neigbour)
    }
}


//adjacency list
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};



depth_first_print(graph, 'a')