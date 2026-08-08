import sys

t = int(sys.stdin.readline())

for _ in range(t):
    n = int(sys.stdin.readline())
    s = sys.stdin.readline().strip()

    pos = 0
    visited = {0}

    for _ in range(n):
        if s[pos] == 'R':
            pos += 1
        else:
            pos -= 1

        visited.add(pos)

    print(len(visited))
    