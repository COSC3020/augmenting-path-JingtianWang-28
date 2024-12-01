function augmentingPath(graph, start, end) {
    if (start === end) {
        return [start];
    }

    let queue = [start]; 
    let visited = new Set(); 
    let predecessors = {}; 
    visited.add(start); 

    while (queue.length > 0) {
        let node = queue.shift(); 

        
        for (let neighbor in graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); 
                predecessors[neighbor] = node; 
                queue.push(neighbor); 

                if (neighbor === end) {
                    let path = [end];
                    let current = end;
                    while (current !== start) {
                        current = predecessors[current];
                        path.unshift(current); 
                    }
                    return path;
                }
            }
        }
    }

    return []; 
}
