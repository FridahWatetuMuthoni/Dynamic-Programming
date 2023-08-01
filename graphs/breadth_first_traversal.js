const breadth_first_print = (graph, start_node) => {
    //shift()-> removes first element
    //push()-> adds an element at the end of the queue
    //queue => first in first out
    let queue = [start_node]
    while (queue.length > 0) {
        let current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
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

breadth_first_print(graph, 'a')