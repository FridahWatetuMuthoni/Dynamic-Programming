/*
Write a function, hasPath, that takes in a object representing the adjacency list
graph and two nodes (src, dest). The function should return a boolean indicating whether or
not there exists a directed path between the source and destination
*/


const has_path_depth = (graph, src,dest)=>{
    let stack = [src]

    while(stack.length > 0){
        let current = stack.pop()
        console.log(current)
        if(current === dest){
            return true
        }
        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
    return false
}

const has_path_depth_recurssion = (graph, src, dest)=>{
    if(src === dest){
        return true
    }
    for(let neighbor of graph[src]){
        if(has_path_depth_recurssion(graph,neighbor,dest) === true){
            return true
        }
    }
    return false
}

const has_path_breadth = (graph, src, dest)=>{
    const queue = [src]

    while(queue.length > 0){
        const current = queue.shift()
        console.log(current)
        if(current === dest){
            return true
        }
        for(let neighbor of graph[current]){
            queue.push(neighbor)
        }
    }
    return false
}

let graph = {
    f:['g', 'i'],
    g:['h'],
    h:[],
    i:['g','k'],
    j:['i'],
    k:[]
}

//has_path_depth(graph, 'f','k')
//has_path_breadth(graph, 'f', 'k')