/*
Write a function, undirectedPath, that takes in an array of edges for an
undirected graph and two nodes(nodeA, nodeB). The function should return a boolean
indicating whether or not there exists a path between nodeA and nodeB
edges:[
        ['i','j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k','l'],
        ['o','n']
    ]
expected graph:
const graph = {
    i:['j','k'],
    j:['i'],
    k:['i','m','l'],
    m:['k'],
    l:['k'],
    o:['n'],
    n:['o']
}
*/

const build_graph = (edges)=>{
    const graph = {}

    for(let edge of edges){
        const [a,b] = edge;
        if(!(a in graph)){
            graph[a]=[]
        }
        if(!(b in graph)){
            graph[b]=[]
        }
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph;
}

const has_path_depth_recurssion = (graph,src,dest, visited)=>{
    if(src === dest){
        return true
    }
    if(visited.has(src)){
        return false
    }

    visited.add(src)

    for(let neighbor of graph[src]){
        if(has_path_depth_recurssion(graph,neighbor,dest,visited)){
            return true
        }
    }
    return false
}

const has_path_breadth = (graph,src,dest)=>{
    if(src == dest){
        return true
    }

    let queue = [src]
    let visited = new Set()
    visited.add(src)

    while(queue.length > 0){
        let current = queue.shift()

        for(let neighbor of graph[current]){
            if(neighbor === dest){
                return true
            }
            if(!(visited.has(neighbor))){
                queue.push(neighbor);
                visited.add(neighbor)
            }
        }
    }
    return false

}

const undirectedPath = (edges, nodeA, nodeB)=>{
    const graph = build_graph(edges)
    //return has_path_depth_recurssion(graph, nodeA, nodeB, new Set())
    return has_path_breadth(graph,nodeA,nodeB)
}

const edges = [
        ['i','j'],
        ['k', 'i'],
        ['m', 'k'],
        ['k','l'],
        ['o','n']
    ]
console.log(undirectedPath(edges,'j','m'))