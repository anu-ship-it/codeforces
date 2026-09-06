var minCost = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    if (m === 1 && n === 1) return grid[0][0];
    const flat = new Array(m * n);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flat[i * n + j] = grid[i][j];
        }
    }

    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    const K = k + 1; 
    const totalStates = m * n * 4 * K;
    const dist = new Float64Array(totalStates);
    dist.fill(Infinity);
    class MinHeap {
        constructor() {
            this.cost = [];
            this.state = [];
        }

        size() {
            return this.cost.length;
        }

        push(cost, state) {
            this.cost.push(cost);
            this.state.push(state);

            let i = this.cost.length - 1;
            while (i > 0) {
                const p = (i - 1) >> 1;
                if (this.cost[p] <= this.cost[i]) break;
                [this.cost[p], this.cost[i]] = [this.cost[i], this.cost[p]];
                [this.state[p], this.state[i]] = [this.state[i], this.state[p]];
                i = p;
            }
        }

        pop() {
            const lastCost = this.cost.pop();
            const lastState = this.state.pop();

            if (this.cost.length === 0) return;

            this.cost[0] = lastCost;
            this.state[0] = lastState;

            let i = 0;
            while (true) {
                const l = (i << 1) + 1;
                const r = l + 1;
                let smallest = i;

                if (l < this.cost.length && this.cost[l] < this.cost[smallest]) smallest = l;
                if (r < this.cost.length && this.cost[r] < this.cost[smallest]) smallest = r;

                if (smallest === i) break;

                [this.cost[i], this.cost[smallest]] = [this.cost[smallest], this.cost[i]];
                [this.state[i], this.state[smallest]] = [this.state[smallest], this.state[i]];
                i = smallest;
            }
        }
    }

    const heap = new MinHeap();
    for (let d = 0; d < 4; d++) {
        const nr = dirs[d][0];
        const nc = dirs[d][1];

        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

        const cell = 0; 
        const nextCell = nr * n + nc;
        const state = ((nextCell * 4 + d) * K + 0);
        const cost = flat[0] + flat[nextCell];

        if (cost < dist[state]) {
            dist[state] = cost;
            heap.push(cost, state);
        }
    }

    while (heap.size() > 0) {
        const cost = heap.cost[0];
        const state = heap.state[0];
        heap.pop();

        if (cost !== dist[state]) continue; 

        const turns = state % K;
        const temp = (state - turns) / K;
        const dir = temp % 4;
        const cell = (temp - dir) / 4;

        const r = (cell / n) | 0;
        const c = cell % n;
        if (r === m - 1 && c === n - 1) {
            return cost;
        }

        for (let nd = 0; nd < 4; nd++) {
            const nr = r + dirs[nd][0];
            const nc = c + dirs[nd][1];

            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;

            let nextTurns = turns;
            if (nd !== dir) {
                if (turns === k) continue; 
                nextTurns = turns + 1;
            }

            const nextCell = nr * n + nc;
            const nextState = ((nextCell * 4 + nd) * K + nextTurns);
            const nextCost = cost + flat[nextCell];

            if (nextCost < dist[nextState]) {
                dist[nextState] = nextCost;
                heap.push(nextCost, nextState);
            }
        }
    }

    return -1; 
};