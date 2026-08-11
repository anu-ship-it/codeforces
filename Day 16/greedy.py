import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    p = list(map(int, input().split()))

    pos = [0] * (n + 1)

    for i in range(n):
        pos[p[i]] = i

    l = 0

    while l < n and p[l] == n - l:
        l += 1

    if l == n:
        print(*p)
        continue

    mx = n
    while pos[mx] < l:
        mx -= 1

    r = pos[mx]

    p[l:r + 1] = p[l:r + 1][::-1]

    print(*p)
    