// Given an m x n matrix classroom, where each cell can be one of the following:
// 'S' - Your initial position (there is exactly one 'S' in the matrix).
// 'L' - A piece of litter.
// 'R' - A recharge station.
// 'X' - An obstacle.
// '.' - An empty cell you can walk on.
function minMoves(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;
    const litterId = Array.from({ length: m }, () => Array(n).fill(-1));
    let sx = 0, sy = 0, k = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const c = classroom[i][j];
            if (c === 'S') {
                sx = i;
                sy = j;
            } else if (c === 'L') {
                litterId[i][j] = k++;
            }
        }
    }

    if (k === 0) return 0;              

    const fullMask = (1 << k) - 1;
   
    const visited = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            Array.from({ length: energy + 1 }, () =>
                new Uint8Array(1 << k)
            )
        )
    );

    let q = [[sx, sy, energy, fullMask]];
    visited[sx][sy][energy][fullMask] = 1;

    const dirs = [-1, 0, 1, 0, -1];      
    let steps = 0;

    while (q.length) {
        const next = [];
        for (const [x, y, e, mask] of q) {
            if (mask === 0) return steps; 

            if (e <= 0) continue;       

            for (let d = 0; d < 4; d++) {
                const nx = x + dirs[d];
                const ny = y + dirs[d + 1];

                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (classroom[nx][ny] === 'X') continue;
                let ne = classroom[nx][ny] === 'R' ? energy : e - 1;
                let nm = mask;
                if (classroom[nx][ny] === 'L') {
                    const bit = litterId[nx][ny];
                    if (bit !== -1) nm &= ~(1 << bit);
                }

                if (!visited[nx][ny][ne][nm]) {
                    visited[nx][ny][ne][nm] = 1;
                    next.push([nx, ny, ne, nm]);
                }
            }
        }
        q = next;
        steps++;
    }
    return -1;
}