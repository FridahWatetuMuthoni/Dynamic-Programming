const depth_first_print = (graph, start_node) => {
    //push-> add at the end, pop()->remove at the end
    const stack = [start_node]

    while (stack.length > 0) {
        let current = stack.pop()
        console.log(current)
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
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